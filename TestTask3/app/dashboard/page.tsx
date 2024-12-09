"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

const Dashboard = () => {
  const router = useRouter();
  const handleLogout = async () => {
    const res = await fetch("/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      router.push("/login");
    } else {
      console.error("Unable to log out");
    }
  };
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-full">
      <h1 className="text-2xl font-bold">Success</h1>
      <div className="flex gap-4">
        <Link href="/">
          <button className="px-4 py-2 bg-slate-200 border border-foreground">
            To all posts
          </button>
        </Link>
        <button
          className="px-4 py-2 bg-slate-200 border border-foreground"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
