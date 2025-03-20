// /app/api/employees/[id]/clock-out/route.ts
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/utils/supabase";
import { getUserFromSession } from "@/utils/auth";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const user = await getUserFromSession(req);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (user.id !== id && user.role !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { error } = await supabase.from("attendance").insert([{ employee_id: id, status: "out" }]);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ message: "Clock out recorded" }, { status: 201 });
}