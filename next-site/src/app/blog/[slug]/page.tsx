import { getAllPosts, getPost } from "../posts";
import HashRedirect from "../HashRedirect";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return { title: post.meta.title, description: post.meta.title };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return (
    <main className="container mx-auto px-6 py-20">
      <HashRedirect />
      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <h1>{post.meta.title}</h1>
        <p className="opacity-70 text-sm">{post.meta.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </main>
  );
}

