import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/utils/supabase";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const url = new URL(req.url);
  const startDate = url.searchParams.get("startDate");
  const endDate = url.searchParams.get("endDate");

  if (!id) {
    return NextResponse.json({ error: "Employee ID is required" }, { status: 400 });
  }

  // Validate employee existence
  const { data: employee, error: employeeError } = await supabase
    .from("employees")
    .select("id")
    .eq("id", id)
    .single();

  if (employeeError || !employee) {
    return NextResponse.json({ error: "Employee not found" }, { status: 404 });
  }

  // Build query with optional date filters
  let query = supabase
    .from("attendance")
    .select("*")
    .eq("employee_id", id)
    .order("date", { ascending: false });

  if (startDate) query = query.gte("date", startDate);
  if (endDate) query = query.lte("date", endDate);

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ attendance: data }, { status: 200 });
}
