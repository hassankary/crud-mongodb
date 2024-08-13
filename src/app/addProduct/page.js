"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  const router = useRouter();

  const addProduct = async (e) => {
    e.preventDefault();

    if (!title || !subtitle) {
      alert("Title and Subtitle required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, subtitle }),
      });

      if (res.ok) {
        router.push("/products");
      } else {
        throw new Error("Failed to create a Product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col font-bold">
        <div className="pt-10 pb-5">Add New Product</div>
        <form className="flex flex-col space-y-2 w-full text-black">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title..."
            className="input input-bordered input-accent bg-slate-50 w-full max-w-xs"
          />
          <input
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            type="text"
            placeholder="Subtitle..."
            className="input input-bordered input-accent bg-slate-50 w-full max-w-xs"
          />
          {/* <textarea className="textarea textarea-accent max-w-xs" placeholder="Description"></textarea> */}

          <button
            onClick={addProduct}
            className="btn btn-accent max-w-[320px] font-bold text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
