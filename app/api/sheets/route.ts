import { NextResponse } from "next/server";
import { getSheetData } from "@/lib/google-sheets";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sheet = searchParams.get("sheet");

  if (!sheet) {
    return NextResponse.json(
      { error: "Sheet parameter is required" },
      { status: 400 }
    );
  }

  try {
    const data = await getSheetData(sheet);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching sheet data" },
      { status: 500 }
    );
  }
}
