import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/utils/supabase";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  const { email, password, first_name, last_name, phone_number, profile_pic_url, department_id } = await req.json();

  // Check if public signups are allowed
  const allowPublicSignups = process.env.ALLOW_PUBLIC_SIGNUPS === "true";
  if (!allowPublicSignups) {
    return NextResponse.json({ error: "Signups are disabled" }, { status: 403 });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user in Supabase Auth
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  // Insert user into employees table
  const { error: insertError } = await supabase.from("employees").insert([
    {
      id: data.user?.id,
      email,
      password: hashedPassword,
      first_name: first_name || null,
      last_name: last_name || null,
      phone_number: phone_number || null,
      profile_pic_url: profile_pic_url || null,
      role_id: "99ba8d8d-a97c-4da7-b374-7a637c8c9831", // Fixed Admin Role ID
      department_id: department_id || null,
      status: "Active",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ]);

  if (insertError) {
    return NextResponse.json({ error: insertError.message }, { status: 500 });
  }

  return NextResponse.json({ user: data.user, role: "admin" }, { status: 201 });
}
