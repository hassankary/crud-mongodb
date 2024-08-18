import EditProductForm from "@/components/EditProductForm";

export default async function EditProduct({ params }) {
  const { id } = params;
  return <EditProductForm id={id}  />;
}
