import { NextResponse } from "next/server";
import { supabase } from "@/utils/supabase";
import { getUserFromRequest } from "@/utils/auth";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        const user = await getUserFromRequest(req);
        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Employees can only access their own profile unless they are an admin
        if (user.role !== "admin" && user.id !== params.id) {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        const { data: employee, error } = await supabase
            .from("employees")
            .select("*")
            .eq("id", params.id)
            .single();

        if (error) {
            return NextResponse.json({ error: "Employee not found" }, { status: 404 });
        }

        return NextResponse.json({ employee }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}


export async function PUT(req: Request, { params }: { params: { id: string } }) {
    try {
        const user = await getUserFromRequest(req);
        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        if (user.role !== "admin" && user.id !== params.id) {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        const updates = await req.json();

        const { data, error } = await supabase
            .from("employees")
            .update(updates)
            .eq("id", params.id)
            .select()
            .single();

        if (error) {
            return NextResponse.json({ error: "Update failed" }, { status: 400 });
        }

        return NextResponse.json({ employee: data }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}


export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    try {
        const user = await getUserFromRequest(req);
        if (!user || user.role !== "admin") {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        const { error } = await supabase.from("employees").delete().eq("id", params.id);

        if (error) {
            return NextResponse.json({ error: "Failed to delete employee" }, { status: 500 });
        }

        return NextResponse.json({ message: "Employee deleted" }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
