import { NextResponse } from "next/server";
import { supabase } from "@/utils/supabase";

export async function POST(
  req: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params;
  const today = new Date().toISOString().split("T")[0];

  // Validate employee exists
  const { data: employee, error: employeeError } = await supabase
    .from("employees")
    .select("id")
    .eq("id", id)
    .single();

  if (employeeError || !employee) {
    return NextResponse.json({ error: "Employee not found" }, { status: 404 });
  }

  // Check if employee has clocked in today
  const { data: attendance, error: attendanceError } = await supabase
    .from("attendance")
    .select("id, clock_in_time, clock_out_time")
    .eq("employee_id", id)
    .eq("date", today)
    .single();

  if (attendanceError || !attendance) {
    return NextResponse.json({ error: "No clock-in record found for today" }, { status: 400 });
  }

  if (attendance.clock_out_time) {
    return NextResponse.json({ message: "Already clocked out today" }, { status: 400 });
  }

  // Clock out the employee and return updated row
  const { data, error } = await supabase
    .from("attendance")
    .update({ clock_out_time: new Date().toISOString() })
    .eq("id", attendance.id)
    .select("*") // ✅ Return updated row
    .single(); // ✅ Ensure single row is returned

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "Clocked out successfully", data }, { status: 200 });
}
