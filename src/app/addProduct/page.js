"use client";

import { AddProductForm } from "@/components/AddProductForm";
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
      const res = await fetch(`/api/products`, {
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
      <AddProductForm
        valueTitle={title}
        onChangeTitle={(e) => setTitle(e.target.value)}
        valueSubtitle={subtitle}
        onChangeSubtitle={(e) => setSubtitle(e.target.value)}
        onClick={addProduct}
      />
    </>
  );
}
