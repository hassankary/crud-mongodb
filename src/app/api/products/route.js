import connectMongoDB from "@/libs/mongodb";
import Product from "@/models/ProductModels";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const products = await Product.find();
  return NextResponse.json({ products });
}

export async function POST(request) {
  const { title, subtitle } = await request.json();
  await connectMongoDB();
  await Product.create({ title, subtitle });
  return NextResponse.json({ message: "Product created" }, { status: 201 });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Product.findByIdAndDelete(id)
  return NextResponse.json({ message: "Product deleted"}, { status: 200 });
}
