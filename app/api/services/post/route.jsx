import ConnectDB from "@/app/db/Connect";
import Service from "@/app/models/Services";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const { formData } = await req.json();
    await ConnectDB();
    const newService = await Service.create(formData);
    if (newService) {
      return NextResponse.json({
        success: true,
        message: "successfully saved",
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
    });
  }
}
