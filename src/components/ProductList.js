"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export const ProductList = () => {
  const [newProduct, setNewProduct] = useState("");

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

  console.log("newProduct", newProduct);

  return (
    <>
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
      <div>
        <table className="table">
          <thead>
            <tr>
              <th className="w-5">
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Title</th>
              <th>Subtitle</th>
            </tr>
          </thead>
          <tbody>
            {newProduct
              ? newProduct?.map((d) => {
                  return (
                    <tr key={d._id}>
                      <th className="w-5">
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <th>{d.title}</th>
                      <th>{d.subtitle}</th>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    </>
  );
};
