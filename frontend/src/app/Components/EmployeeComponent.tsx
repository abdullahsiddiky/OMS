import axios from "../service/instance";1
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
interface EmployeesProps {
  deptId: number;
}
export default async function Employees({ deptId }: EmployeesProps) {
  const token = cookies().get("token")?.value;
  if (!token) {
    redirect("/");
  }
  const data = await axios.post(
    "users/list_employee",
    {
      deptId: deptId,
    },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return (
<div className="border border-gray-800">
  <table className="min-w-full divide-y divide-gray-100">
    <thead>
      <tr>
        <th className="py-3 px-5 text-left">Name</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      {data.data.department.map((person: any) => (
        person.employees.map((d:any)=>(
          <tr key={person.id} className="flex justify-between gap-x-6 py-5">
             <td key={d.id} className="py-4 px-6">
              <p className="text-sm font-semibold leading-6 text-gray-900 hover:bg-red-700">
                 <a href={"/employee/" + d.id}>
                   {d.name}
                 </a>
               </p>
             </td>
           </tr>
        ))
      ))}
    </tbody>
  </table>
</div>
  );
}
