import Link from "next/link";
import { getAllPosts } from "./posts";
import HashRedirect from "./HashRedirect";

export const metadata = {
  title: "Blog",
  description: "Thoughts, tutorials, and learnings from Harun Shaikh.",
};

export default async function BlogList() {
  const posts = await getAllPosts();
  return (
    <main className="container mx-auto px-6 py-20">
      <HashRedirect />
      <h1 className="text-2xl sm:text-3xl font-semibold">Blog</h1>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-xl border p-5 hover:shadow-md transition">
            <h2 className="text-xl font-medium">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-xs opacity-70 mt-1">{post.date}</p>
            <p className="text-sm opacity-90 mt-2">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

