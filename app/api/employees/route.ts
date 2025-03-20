import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/utils/supabase';

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  // Validate employee exists
  const { data: employee, error: employeeError } = await supabase
    .from('employees')
    .select('id')
    .eq('id', id)
    .single();

  if (employeeError || !employee) {
    return NextResponse.json({ error: 'Employee not found' }, { status: 404 });
  }

  // Check if the employee has already clocked in today
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  const { data: existingAttendance } = await supabase
    .from('attendance')
    .select('id, clock_in')
    .eq('employee_id', id)
    .eq('date', today)
    .single();

  if (existingAttendance) {
    return NextResponse.json({ message: 'Already clocked in today' }, { status: 400 });
  }

  // Clock in the employee
  const { data, error } = await supabase.from('attendance').insert([
    { employee_id: id, date: today, clock_in: new Date().toISOString(), status: 'Present' }
  ]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: 'Clocked in successfully', data });
}
