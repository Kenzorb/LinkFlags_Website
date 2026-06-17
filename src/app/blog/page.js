export const metadata = {
  title: "LinkFlags Blog",
  description: "Articles about search productivity, browsing habits, and reducing click regret.",
};

const posts = [
  {
    title: "How to Know if an Article Is Worth Reading Before Clicking",
    slug: "how-to-know-if-an-article-is-worth-reading-before-clicking",
    excerpt:
      "Learn the signals that help you decide whether a search result is worth opening.",
  },
];

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-5xl font-bold">Blog</h1>

      <p className="mt-4 text-slate-600">
        Thoughts on search, productivity, and making better decisions before
        clicking.
      </p>

      <h2 className="mt-12 mb-6 text-2xl font-bold">
        Latest Articles
      </h2>
      <div className="mt-12 space-y-8">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block rounded-2xl border border-slate-200 p-6 hover:bg-slate-50"
          >
            <h2 className="text-2xl font-semibold">
              {post.title}
            </h2>

            <p className="mt-3 text-slate-600">
              {post.excerpt}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}