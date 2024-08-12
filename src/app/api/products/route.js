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
  return NextResponse.json({ message: "Product Created" }, { status: 201 });
}
