import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/utils/supabase";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  const { token, new_password } = await req.json();

  // Hash new password
  const hashedPassword = await bcrypt.hash(new_password, 10);

  // Update password in Supabase Auth
  const { error } = await supabase.auth.updateUser({
    password: new_password, // Supabase handles hashing internally
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ message: "Password reset successful" }, { status: 200 });
}
