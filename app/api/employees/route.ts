import { NextResponse } from "next/server";
import { supabase } from "@/utils/supabase"; 
import { getUserFromRequest } from "@/utils/auth";

// export async function GET() {
//     // Fetch all employees from Supabase
//     console.log("getting get request going to DB...")
//     const { data, error } = await supabase.from("employees").select("*");

//     if (error) {
//         return NextResponse.json({ error: error.message }, { status: 500 });
//     }

//     return NextResponse.json(data, { status: 200 });
// }

export async function GET(req: Request) {
    try {
        const user = await getUserFromRequest(req);
        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Only admins can fetch all employees
        if (user.role !== "admin") {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        const { data: employees, error } = await supabase.from("employees").select("*");

        if (error) {
            return NextResponse.json({ error: "Failed to fetch employees" }, { status: 500 });
        }

        return NextResponse.json({ employees }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
