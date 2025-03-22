import EmployeeNavbar from "@/app/components/EmployeeNavbar";

export default function DashboardLayout({
  children,
  attendance,
  stats,
  clocking,
}: {
  children: React.ReactNode;
  attendance: React.ReactNode;
  stats: React.ReactNode;
  clocking: React.ReactNode;
}) {
  return (
    <div className="h-screen">
      {/* Navbar */}
      <EmployeeNavbar />

      {/* Add padding-top to push content below navbar */}
      <div className="flex pt-16">
        {/* Left Section */}
        <div className="w-3/5 p-10 flex-1 gap-8">
          {clocking}
          {stats}
        </div>

        {/* Right Section - Attendance History */}
        <div className="w-2/5 p-6 m-4 rounded-xl hidden md:block">
          {attendance}
        </div>
      </div>

      {/* Render the page content */}
      <main>{children}</main>
    </div>
  );
}
