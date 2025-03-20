import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/utils/supabase";
import { getUserFromRequest } from "@/utils/auth";

export async function GET(req: NextRequest) {
  try {
    const user = await getUserFromRequest(req);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data: employees, error } = await supabase.from("employees").select("*");

    if (error) {
      return NextResponse.json({ error: "Failed to fetch employees" }, { status: 500 });
    }

    return NextResponse.json({ employees }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const user = await getUserFromRequest(req);
    if (!user || user.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const employeeData = await req.json();

    const { data, error } = await supabase.from("employees").insert(employeeData).select().single();

    if (error) {
      return NextResponse.json({ error: "Failed to create employee" }, { status: 400 });
    }

    return NextResponse.json({ employee: data }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
