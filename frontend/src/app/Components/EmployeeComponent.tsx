import axios from "../service/instance";
import { url } from "inspector";
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
  const persons = [
    {
      id: 1,
      name: "Mr A",
    },
    {
      id: 2,
      name: "Mr B",
    },
    {
      id: 3,
      name: "Mr C",
    },
    {
      id: 4,
      name: "Mr D",
    },
    {
      id: 5,
      name: "Mr E",
    },
    {
      id: 6,
      name: "Mr F",
    },
  ];
  console.log(data);
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
            <tr key={person.id} className="">
              <td className="py-4 px-6">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {person.employees.map((d: any) => (
                    <a href={"/employee/" + d.id}>
                      {d.id} {d.name}
                    </a>
                  ))}
                </p>
              </td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
}
