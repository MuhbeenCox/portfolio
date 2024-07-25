import ConnectDB from "@/app/db/Connect";
import Tech from "@/app/models/Tech";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    await ConnectDB();

    const tech = await Tech.find({});
    if (tech) {
      return NextResponse.json({
        success: true,
        data: tech,
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
