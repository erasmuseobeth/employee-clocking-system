export default function APIDocumentation() {
    const apiRoutes = [
      {
        category: "Authentication",
        routes: [
          { method: "POST", path: "/api/auth/signup", description: "Register a new employee." },
          { method: "POST", path: "/api/auth/login", description: "Authenticate employee and return an access token." },
          { method: "POST", path: "/api/auth/logout", description: "Logout the current session." },
          { method: "POST", path: "/api/auth/forgot-password", description: "Send password reset email." },
          { method: "POST", path: "/api/auth/reset-password", description: "Reset password using a token." },
        ],
      },
      {
        category: "Employee Actions",
        routes: [
          { method: "POST", path: "/api/employees/:id/clock-in", description: "Clock in/out an employee." },
          { method: "GET", path: "/api/employees/:id/attendance", description: "Fetch attendance records for an employee." },
          { method: "POST", path: "/api/employees/:id/leave-request", description: "Submit a leave request." },
          { method: "GET", path: "/api/employees/:id/profile", description: "Get employee profile details." },
          { method: "PUT", path: "/api/employees/:id/profile", description: "Update employee profile details." },
          { method: "GET", path: "/api/employees/:id/support", description: "Get employee support tickets." },
        ],
      },
      {
        category: "Admin Actions",
        routes: [
          { method: "GET", path: "/api/admin/employees", description: "List all employees." },
          { method: "GET", path: "/api/admin/employees/:id", description: "Get a specific employee's details." },
          { method: "POST", path: "/api/admin/employees", description: "Add a new employee." },
          { method: "PUT", path: "/api/admin/employees/:id", description: "Update an employee's details." },
          { method: "DELETE", path: "/api/admin/employees/:id", description: "Delete an employee." },
          { method: "GET", path: "/api/admin/attendance", description: "Get all attendance records." },
          { method: "GET", path: "/api/admin/reports", description: "Generate reports for employees." },
          { method: "POST", path: "/api/admin/import", description: "Import employee data from a file." },
          { method: "GET", path: "/api/admin/export", description: "Export employee data as a file." },
          { method: "GET", path: "/api/admin/logs", description: "Fetch system logs." },
        ],
      },
    ];
  
    return (
      <main className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Employee Clocking System API</h1>
        <p className="text-gray-700 mb-6">
          This API allows employees to clock in/out, manage attendance, request leave, and perform admin tasks.
          All protected routes require an Authorization header with a Bearer token.
        </p>
  
        {apiRoutes.map((section) => (
          <div key={section.category} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{section.category}</h2>
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              {section.routes.map((route, index) => (
                <div
                  key={route.path}
                  className={`p-4 ${index % 2 === 0 ? "bg-gray-100" : "bg-white"} flex justify-between items-center`}
                >
                  <span className="font-mono">{route.path}</span>
                  <span className="px-3 py-1 rounded text-white text-sm font-bold" style={{ backgroundColor: getMethodColor(route.method) }}>
                    {route.method}
                  </span>
                  <span className="text-gray-600 text-sm">{route.description}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    );
  }
  
  function getMethodColor(method: string) {
    switch (method) {
      case "GET":
        return "#4CAF50"; // Green
      case "POST":
        return "#2196F3"; // Blue
      case "PUT":
        return "#FFC107"; // Yellow
      case "DELETE":
        return "#F44336"; // Red
      default:
        return "#9E9E9E"; // Gray
    }
  }
  
