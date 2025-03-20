import { cookies } from "next/headers";
import { supabase } from "./supabase";

export async function getUserFromSession(req: Request) {
  let token = req.headers.get("Authorization")?.replace("Bearer ", "");
  console.log("Token being used:", token);

  if (!token) {
    const cookieStore = cookies();
    token = (await cookieStore).get("sb-access-token")?.value;
  }

  if (!token) return null;

  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data?.user) return null;

  const userId = data.user.id;

  // Fetch employee details including role
  const { data: employee, error: empError } = await supabase
    .from("employees")
    .select("id, role_id")
    .eq("id", userId)
    .single();

  if (empError || !employee) return null;

  console.log("User details:", employee);

  return { id: employee.id, role: employee.role_id };
}
