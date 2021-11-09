import MarkdownIt from 'markdown-it'
import figures from 'markdown-it-image-figures'

const md = new MarkdownIt()

const processMarkdown = (content) => {
	console.log({content, figures})
	return md
	.use(figures, {
		lazy: true,
		figcaption: true
	})
	.render(content)
}


export default processMarkdown;
