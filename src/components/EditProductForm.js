"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditProductForm({ id }) {
  const [initialFetching, setInitialFetching] = useState(true);
  const [newTitle, setNewTitle] = useState("");
  const [newSubtitle, setNewSubtitle] = useState("");
  const router = useRouter();

  const getProductById = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch a Product");
      }
      const response = await res.json();
      const { products } = response;
      setNewTitle(products.title);
      setNewSubtitle(products.subtitle);
      setInitialFetching(false);
    } catch (error) {
      console.log("error loading products:", error);
    }
  };

  useEffect(() => {
    getProductById(id);
  }, []);

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
      <div className="flex flex-col mx-auto p-10 w-fit items-center justify-center font-bold bg-slate-800 border rounded-3xl">
        <div className="pb-8 text-xl text-white">Edit product</div>
        <form className="flex flex-col space-y-2 text-black">
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            type="text"
            placeholder={!initialFetching ? "Title..." : "Loading Title..."}
            className="input input-bordered input-accent bg-slate-50 w-full max-w-xs"
          />
          <input
            value={newSubtitle}
            onChange={(e) => setNewSubtitle(e.target.value)}
            type="text"
            placeholder={
              !initialFetching ? "Subtitle..." : "Loading Subtitle..."
            }
            className="input input-bordered input-accent bg-slate-50 w-full max-w-xs"
          />
          <button
            onClick={updateProduct}
            className="btn btn-accent max-w-[320px] font-bold text-white"
          >
            Update
          </button>
          <Link
            href={"/products"}
            className="btn btn-error max-w-[320px] font-bold text-white"
          >
            Cancel
          </Link>
        </form>
      </div>
    </>
  );
}
