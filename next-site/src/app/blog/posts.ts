import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-rehype";
import gfm from "remark-gfm";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";
import rehypeAutolink from "rehype-autolink-headings";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = { slug: string; title: string; date: string; excerpt: string };

export async function getAllPosts(): Promise<PostMeta[]> {
  const files = await fs.readdir(BLOG_DIR);
  const posts: PostMeta[] = [];
  for (const file of files) {
    if (!file.endsWith(".md")) continue;
    const slug = file.replace(/\.md$/, "");
    const content = await fs.readFile(path.join(BLOG_DIR, file), "utf-8");
    const { data, excerpt } = matter(content, { excerpt: true, excerpt_separator: "\n\n" });
    posts.push({ slug, title: String(data.title || slug), date: String(data.date || ""), excerpt: String(excerpt || "") });
  }
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

export async function getPost(slug: string) {
  const raw = await fs.readFile(path.join(BLOG_DIR, `${slug}.md`), "utf-8");
  const { data, content } = matter(raw);
  const processed = await remark().use(gfm).use(html).use(rehypeSlug).use(rehypeAutolink).use(rehypeStringify).process(content);
  return {
    meta: { title: String(data.title || slug), date: String(data.date || "") },
    html: processed.toString(),
  };
}

