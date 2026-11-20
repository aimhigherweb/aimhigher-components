import MarkdownIt from 'markdown-it';
import figures from 'markdown-it-image-figures';
import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/index.js';

// Prism core ships markup (HTML), CSS and JS; load the other languages posts use
loadLanguages([`bash`, `scss`, `json`, `jsx`, `typescript`, `yaml`]);

// Fence names that mean the same language. The name used here becomes the
// `language-*` class, which code.scss uses for the label (HTML, CSS, JS…)
const aliases = {
	js: `javascript`,
	ts: `typescript`,
	sh: `bash`,
	shell: `bash`,
	zsh: `bash`,
	yml: `yaml`,
	markup: `html`,
	xml: `html`,
	svg: `html`,
};
const grammars = { html: `markup` };

// Highlights a fenced code block, returning the whole <pre> so the language
// class sits on <pre> (for the label) as well as <code> (for Prism's styles)
const highlight = (code, info) => {
	const lang = aliases[info.toLowerCase()] ?? info.toLowerCase();
	const grammar = Prism.languages[grammars[lang] ?? lang];
	const html = grammar ? Prism.highlight(code, grammar, lang) : md.utils.escapeHtml(code);
	const name = md.utils.escapeHtml(lang);
	const preAttrs = lang ? ` class="language-${name}" data-language="${name}"` : ``;
	const codeAttrs = lang ? ` class="language-${name}"` : ``;

	return `<pre${preAttrs}><code${codeAttrs}>${html}</code></pre>\n`;
};

// Configured once; calling `.use()` on every render stacked the plugin repeatedly
const md = new MarkdownIt({ highlight }).use(figures, {
	lazy: true,
	figcaption: true,
});

// External links (http/https) open in a new tab, with visually hidden text saying so
const renderToken = (tokens, idx, options, env, self) => self.renderToken(tokens, idx, options);
const renderLink = md.renderer.rules.link_open ?? renderToken;
const renderLinkClose = md.renderer.rules.link_close ?? renderToken;

md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
	const token = tokens[idx];

	if (/^https?:\/\//i.test(token.attrGet(`href`) ?? ``)) {
		token.attrSet(`target`, `_blank`);
		token.attrSet(`rel`, `noopener`);
	}

	return renderLink(tokens, idx, options, env, self);
};

md.renderer.rules.link_close = (tokens, idx, options, env, self) => {
	let open = idx - 1;

	while (open >= 0 && !(tokens[open].type === `link_open` && tokens[open].level === tokens[idx].level)) open--;

	const newTab = tokens[open]?.attrGet(`target`) === `_blank` ? ` <span class="sr-only">Opens in a new tab</span>` : ``;

	return newTab + renderLinkClose(tokens, idx, options, env, self);
};

const processMarkdown = (content = ``) => md.render(content);

export default processMarkdown;
