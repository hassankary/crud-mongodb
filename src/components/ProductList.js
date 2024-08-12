"use client";
import Link from "next/link";

export const ProductList = () => {

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
          
        </table>
      </div>
    </>
  );
};
