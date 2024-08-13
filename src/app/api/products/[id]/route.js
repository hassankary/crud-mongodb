import connectMongoDB from "@/libs/mongodb";
import Product from "@/models/ProductModels";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newSubtitle: subtitle } = await request.json();
  await connectMongoDB();
  await Product.findByIdAndUpdate(id, { title, subtitle });
  return NextResponse.json({ message: "Product updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const products = await Product.findOne({ _id: id });
  return NextResponse.json({ products }, { status: 200 });
}
