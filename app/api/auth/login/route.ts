import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/utils/supabase";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  // Find user in employees table
  const { data: user, error } = await supabase
    .from("employees")
    .select("id, email, password, role_id, status")
    .eq("email", email)
    .single();

  if (error || !user) {
    return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
  }

  // Compare the hashed password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
  }

  // Sign in with Supabase Auth
  const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (authError) {
    return NextResponse.json({ error: authError.message }, { status: 401 });
  }

  return NextResponse.json({
    message: "Login successful",
    user: { id: user.id, email: user.email, role_id: user.role_id, status: user.status },
    session: authData.session,
  });
}
