"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const ProductList = () => {
  const [newProduct, setNewProduct] = useState(null);
  const router = useRouter();

  const getProducts = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/products", {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to create a Product");
      }
      const results = await res.json();
      setNewProduct(results.products);
    } catch (error) {
      console.log("error loading products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const deleteProduct = async (e, id) => {
    e.preventDefault();
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/products?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        getProducts();
      }
    }
  };

  return (
    <div className="">
      <div className="flex justify-between p-10">
        <div className="flex justify-center items-center font-bold">
          BLOG MONGO
        </div>
        <div>
          <Link href={"/addProduct"} className="btn btn-ghost">
            Add
          </Link>
        </div>
      </div>
      <div className=" flex justify-center">

      <div className="flex max-w-5xl">
        <table className="table">
          <thead className="text-black">
            <tr>
              <th className="w-5">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Title</th>
              <th>Subtitle</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {newProduct
              ? newProduct?.map((d, i) => {
                  return (
                    <tr key={d._id}>
                      <td className="w-5">
                        {i + 1 + "."}
                      </td>
                      <td>{d.title}</td>
                      <td>{d.subtitle}</td>
                      <td className=" space-x-2">
                        <button
                          onClick={() => router.push(`editProduct/${d._id}`)}
                          className="btn btn-outline btn-accent"
                        >
                          Edit
                        </button>
                        <button
                          onClick={(e) => deleteProduct(e, d._id)}
                          className="btn btn-outline btn-error"
                        >
                          Del
                        </button>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};
