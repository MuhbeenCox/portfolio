import ConnectDB from "@/app/db/Connect";
import Tech from "@/app/models/Tech";

import { NextResponse } from "next/server";

export async function PUT(req, res) {
  try {
    const { formData } = await req.json();
    const id = formData.id;

    await ConnectDB();

    const updateTech = await Tech.findByIdAndUpdate({ _id: id }, formData);
    if (updateTech) {
      return NextResponse.json({
        success: true,
        message: "successfully update",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "failed",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "server error",
      status: 500,
    });
  }
}
