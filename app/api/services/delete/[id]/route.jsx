import ConnectDB from "@/app/db/Connect";
import Service from "@/app/models/Services";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const id = params.id;
    await ConnectDB();

    const deleteService = await Service.findByIdAndDelete(id);
    if (deleteService) {
      return NextResponse.json({
        success: true,
        message: "Successfully Deleted",
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
