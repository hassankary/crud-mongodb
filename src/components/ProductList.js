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
    <>
      {newProduct ? (
        <div className="">
          <div className="flex justify-center py-10 px-4">
            <div>
              <Link
                href={"/addProduct"}
                className="btn bg-slate-800 text-white"
              >
                Add Item
              </Link>
            </div>
          </div>
          <div className=" flex justify-center">
            <div className="flex flex-col w-full px-2 sm:px-0">
              <table className="table w-full">
                <thead className="text-black">
                  <tr className="border-slate-300">
                    <th>No.</th>
                    <th>Title</th>
                    <th>Subtitle</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {newProduct?.map((d, i) => {
                    return (
                      <tr key={d._id} className=" border-slate-300">
                        <td className="w-5">{i + 1 + "."}</td>
                        <td>{d.title}</td>
                        <td>{d.subtitle}</td>
                        <td className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-x-2 sm:space-y-0">
                          <button
                            onClick={() => router.push(`editProduct/${d._id}`)}
                            className="btn btn-outline btn-accent"
                          >
                            Edit
                          </button>
                          <button
                            onClick={(e) => deleteProduct(e, d._id)}
                            className="btn btn-outline btn-error w-full sm:w-fit"
                          >
                            Del
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <span className="loading loading-infinity loading-lg"></span>
      )}
    </>
  );
};
