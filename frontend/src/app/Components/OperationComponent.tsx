import Link from "next/navigation";
export default function Operation() {
  return (
    <div>
      <div className="border border-gray-800">
        <div>
          <a
            href="/add_department"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Add Department
          </a>
        </div>
        <div>
          <a
            href="/add_employee"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Add Employee
          </a>
        </div>
        <div>
          <a
            href="/add_expense"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Add Expense
          </a>
        </div>
      </div>
    </div>
  );
}
