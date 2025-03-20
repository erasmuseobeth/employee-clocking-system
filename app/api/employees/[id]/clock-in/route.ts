import { NextRequest, NextResponse } from "next/server";
import { getUserFromSession } from "@/utils/auth"; // Assuming you have this function
import { supabase } from "@/utils/supabase";

export async function POST(req: NextRequest, context: { params: { id: string } }) {
  const { id } = context.params;

  const user = await getUserFromSession(req);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (user.id !== id && user.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  // Ensure request body is valid JSON
  let body;
  try {
    body = await req.json();
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON input. Ensure Content-Type is application/json." }, { status: 400 });
  }

  const { status } = body;
  if (!status) {
    return NextResponse.json({ error: "Status is required" }, { status: 400 });
  }

  // Insert clock-in record into Supabase
  const { error } = await supabase
    .from("attendance") // Adjust table name as needed
    .insert({ employee_id: id, status });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: `Employee ${id} clocked ${status}` }, { status: 200 });
}
