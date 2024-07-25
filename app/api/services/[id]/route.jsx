import ConnectDB from "@/app/db/Connect";
import Service from "@/app/models/Services";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const id = params.id;
  try {
    await ConnectDB();
    const service = await Service.findById(id);
    if (service) {
      return NextResponse.json({
        success: true,
        data: service,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Not found",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error,
      status: 500,
    });
  }
}
