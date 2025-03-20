import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/utils/supabase';
export async function POST(req: NextRequest, context: { params: { id: string } }) {
  const { id } = context.params;
  const today = new Date().toISOString().split('T')[0];

  // Validate employee exists
  const { data: employee, error: employeeError } = await supabase
    .from('employees')
    .select('id')
    .eq('id', id)
    .single();

  if (employeeError || !employee) {
    return NextResponse.json({ error: 'Employee not found' }, { status: 404 });
  }

  // Check if already clocked in today
  const { data: existingAttendance } = await supabase
    .from('attendance')
    .select('id, clock_in_time')
    .eq('employee_id', id)
    .eq('date', today)
    .single();

  if (existingAttendance) {
    return NextResponse.json({ message: 'Already clocked in today' }, { status: 400 });
  }

  // Clock in the employee and return the inserted row
  const { data, error } = await supabase
    .from('attendance')
    .insert([{ employee_id: id, date: today, clock_in_time: new Date().toISOString(), status: 'Present' }])
    .select('*'); // ✅ Ensure Supabase returns the inserted row

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: 'Clocked in successfully', data });
}

