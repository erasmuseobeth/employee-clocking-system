// /app/api/employees/[id]/leave-requests/route.ts
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/utils/supabase";
import { getUserFromSession } from "@/utils/auth";

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // ✅ Corrected to await the params
  const user = await getUserFromSession(req);

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (user.id !== id && user.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { start_date, end_date, reason } = await req.json();

  if (!start_date || !end_date || !reason) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  const { error } = await supabase
    .from("leave_requests")
    .insert([{ employee_id: id, start_date, end_date, reason }]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "Leave request submitted" }, { status: 201 });
}
