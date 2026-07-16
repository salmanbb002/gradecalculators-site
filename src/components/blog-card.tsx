import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="blog-card">
      <div className="blog-card-top"><span><BookOpen size={17} /></span><small>{post.category}</small></div>
      <h3><Link href={`/blog/${post.slug}/`}>{post.title}</Link></h3>
      <p>{post.description}</p>
      <div className="blog-card-meta"><span>{post.readingTime}</span><Link aria-label={`Read ${post.title}`} href={`/blog/${post.slug}/`}>Read guide <ArrowUpRight size={15} /></Link></div>
    </article>
  );
}
