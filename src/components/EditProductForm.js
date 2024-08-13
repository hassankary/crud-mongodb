"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditProductForm({ id, title, subtitle }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newSubtitle, setNewSubtitle] = useState(subtitle);
  const router = useRouter();

  const updateProduct = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newSubtitle }),
      });

      if (res.ok) {
        router.refresh();
        router.push("/products");
      } else {
        throw new Error("Failed to update a Product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col font-bold">
        <div className="pt-10 pb-5">Edit product {title}</div>
        <form className="flex flex-col space-y-2 w-full text-black">
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            type="text"
            placeholder="Title..."
            className="input input-bordered input-accent bg-slate-50 w-full max-w-xs"
          />
          <input
            value={newSubtitle}
            onChange={(e) => setNewSubtitle(e.target.value)}
            type="text"
            placeholder="Subtitle..."
            className="input input-bordered input-accent bg-slate-50 w-full max-w-xs"
          />
          <button
            onClick={updateProduct}
            className="btn btn-accent max-w-[320px] font-bold text-white"
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
}
