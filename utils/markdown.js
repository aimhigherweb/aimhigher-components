import stringify from 'rehype-stringify';
import remark from 'remark';
import githubFlavour from 'remark-gfm';
import parse from 'remark-parse';
import rehype from 'remark-rehype';

const processMarkdown = (content) => remark()
	.use(parse)
	.use(githubFlavour)
	.use(rehype)
	.use(stringify)
	.processSync(content);

export default processMarkdown;
