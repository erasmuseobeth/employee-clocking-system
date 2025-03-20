
// /app/api/employees/[id]/attendance/route.ts
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/utils/supabase";
import { getUserFromSession } from "@/utils/auth";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const user = await getUserFromSession(req);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (user.id !== id && user.role !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  if (!id) return NextResponse.json({ error: "Employee ID is required" }, { status: 400 });

  const { data, error } = await supabase.from("attendance").select("*").eq("employee_id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(data, { status: 200 });
}