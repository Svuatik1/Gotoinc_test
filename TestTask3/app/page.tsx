import Link from "next/link";
import ListPost from "./components/ListPost";
import { Post } from "./types";
import { cookies } from "next/headers";

const Home = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const isLoggedIn = !!token;

  return (
    <div className="relative flex flex-col gap-8">
      <h1 className="font-bold text-start text-2xl">All Posts</h1>
      <Link href={isLoggedIn ? "/dashboard" : "/login"}>
        <button className="absolute right-0 top-0 px-4 py-2 bg-slate-200">
          {isLoggedIn ? "Dashboard" : "Login"}
        </button>
      </Link>
      <div className="flex flex-col gap-5">
        {posts.map((post) => (
          <ListPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
