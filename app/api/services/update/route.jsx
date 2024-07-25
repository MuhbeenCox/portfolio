import ConnectDB from "@/app/db/Connect";
import Service from "@/app/models/Services";
import { NextResponse } from "next/server";

export async function PUT(req, res) {
  try {
    const { formData } = await req.json();
    const _id = formData._id;
    await ConnectDB();
    const updateService = await Service.findByIdAndUpdate({ _id }, formData);
    if (updateService) {
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
