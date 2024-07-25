import ConnectDB from "@/app/db/Connect";
import Tech from "@/app/models/Tech";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    await ConnectDB();

    const { formData } = await req.json(); // Directly access formData from req.json()

    const images = { formData };

    const newtech = await Tech.create(formData);

    if (newtech) {
      return NextResponse.json({
        success: true,
        message: "Successfully saved",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: " Failed ",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      status: 500,
      message: "Server Error",
    });
  }
}
