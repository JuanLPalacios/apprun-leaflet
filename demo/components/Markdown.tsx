import { app, VNode } from 'apprun';
import MarkdownIt from 'markdown-it';
import MarkdownItAnchor from 'markdown-it-anchor';
import slugify from '@sindresorhus/slugify';

const md = new MarkdownIt()
  .use(MarkdownItAnchor, { slugify: s => slugify(s) });

export const Markdown = (props, children:Array<VNode | string>) =>{
    return <>
        {children.map((child)=>{
            switch (typeof child) {
                case 'string':
                    const tab = /(^[^\S\r\n]+)/gm
                        .exec(child)
                        ?.reduce((a, b) => a.length <= b.length ? a : b).length
                        || 0;
                    return app.safeHTML(
                        md.render(
                            child.replace(
                                new RegExp(`(^[^\\S\\r\\n]{${tab}})`, 'gm'), '')));
                default:
                    return child;
            }
        }).flat()}
    </>;
}