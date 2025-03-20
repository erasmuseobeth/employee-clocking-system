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

  return { id: data.user.id, role: data.user.user_metadata?.role };
}
