import MarkdownIt from 'markdown-it';
import figures from 'markdown-it-image-figures';

// Configured once; calling `.use()` on every render stacked the plugin repeatedly
const md = new MarkdownIt().use(figures, {
	lazy: true,
	figcaption: true,
});

// External links (http/https) open in a new tab
const renderLink = md.renderer.rules.link_open
	?? ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));

md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
	const token = tokens[idx];

	if (/^https?:\/\//i.test(token.attrGet(`href`) ?? ``)) {
		token.attrSet(`target`, `_blank`);
		token.attrSet(`rel`, `noopener`);
	}

	return renderLink(tokens, idx, options, env, self);
};

const processMarkdown = (content = ``) => md.render(content);

export default processMarkdown;
