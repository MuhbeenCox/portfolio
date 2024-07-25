import ConnectDB from "@/app/db/Connect";
import Service from "@/app/models/Services";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    await ConnectDB();

    const Services = await Service.find();
    if (Services) {
      return NextResponse.json({
        success: true,
        data: Services,
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
