"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <Link href="/" className="ml-auto w-fit">
        <button className="px-4 py-2 bg-slate-200 border border-foreground">
          Back
        </button>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="h-full flex flex-col justify-center items-center gap-4"
      >
        <div className="flex items-center flex-col gap-2">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="bg-background border border-foreground text-center"
          />
        </div>
        <div className="flex items-center flex-col gap-2">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-background border border-foreground text-center"
          />
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <button
          type="submit"
          className="border border-foreground px-4 bg-slate-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
