import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/utils/supabase";
import { getUserFromSession } from "@/utils/auth";

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // ✅ Fixed by awaiting params
  const user = await getUserFromSession(req);

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (user.id !== id && user.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { subject, message } = await req.json();
  if (!subject || !message) {
    return NextResponse.json({ error: "Subject and message are required" }, { status: 400 });
  }

  const { error } = await supabase
    .from("support_tickets")
    .insert([{ employee_id: id, subject, message }]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "Support request submitted" }, { status: 201 });
}
