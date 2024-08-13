import EditProductForm from "@/components/EditProductForm";

const getProductById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch a Product");
    }
    return res.json();
  } catch (error) {
    console.log("error loading products:", error);
  }
};

export default async function EditProduct({ params }) {
  const { id } = params;
  const { products } = await getProductById(id);
  const { title, subtitle } = products;

  return <EditProductForm id={id} title={title} subtitle={subtitle} />;
}
