"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className=" text-center space-y-3">
      <div className=" font-bold text-xl">Home Page</div>
      <button
        onClick={() => router.push("/products")}
        className="btn btn-accent max-w-[320px] font-bold text-white"
      >
        Explore Mongo BLOG
      </button>
    </div>
  );
}
