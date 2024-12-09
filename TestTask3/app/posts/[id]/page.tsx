import type { Post } from "@/app/types";
import { fetchSinglePost } from "@/app/utils/api/fetchSinglePost";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface IPostProps {
  params: { id: string };
}

export async function generateMetadata({
  params,
}: IPostProps): Promise<Metadata> {
  const { id } = await params;
  const post = await fetchSinglePost(id);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.body,
  };
}

const Post = async ({ params }: IPostProps) => {
  const { id } = await params;
  const post: Post = await fetchSinglePost(id);

  if (!post) return notFound();

  return (
    <div className="flex flex-col gap-4">
      <Link href="/" className="ml-auto w-fit">
        <button className="px-4 py-2 bg-slate-200 border border-foreground">
          Back
        </button>
      </Link>
      <h1 className="font-bold text-start text-2xl">Post: {id}</h1>
      <div className="border-2 p-2 bg-slate-200 max-w-5xl">
        <h1 className="font-mono font-bold text-slate-950">{post.title}</h1>
        <p className="line-clamp-2 text-indigo-950">{post.body}</p>
      </div>
    </div>
  );
};

export default Post;
