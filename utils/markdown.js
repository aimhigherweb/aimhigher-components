import MarkdownIt from 'markdown-it';
import figures from 'markdown-it-image-figures';

// Configured once; calling `.use()` on every render stacked the plugin repeatedly
const md = new MarkdownIt().use(figures, {
	lazy: true,
	figcaption: true,
});

const processMarkdown = (content = ``) => md.render(content);

export default processMarkdown;
