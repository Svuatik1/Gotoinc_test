import { FC } from "react";
import { Post } from "../types";
import Link from "next/link";

type IListPostProps = { post: Post };

const ListPost: FC<IListPostProps> = ({ post }) => {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="border-2 p-2 bg-slate-200 max-w-5xl">
        <h3 className="font-mono font-bold text-slate-950">{post.title}</h3>
        <p className="line-clamp-2 text-indigo-950">{post.body}</p>
      </div>
    </Link>
  );
};

export default ListPost;
