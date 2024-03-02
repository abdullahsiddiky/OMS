import { cookies } from "next/headers";
import axios from "../service/instance";
import NavBar from "./Nav";
import { redirect } from "next/navigation";

export default async function Deparment() {
  const token = cookies().get("token")?.value;
  if(!token){
    redirect('/')
  }
  const data = await axios.get("/users/list_departments", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
 
  return (
    <div className="border border-gray-800 rounded ml-2 h-[calc(100vh-350px)] overflow-auto ">
      <table className="min-w-full divide-y divide-gray-100">
        <thead>
          <tr>
            <th className="py-3 px-6 text-left">Deparments</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-500">
        {data.data.map((item: any) =>
      item.departments.map((d: any) => (
        <tr key={d.id} className="flex justify-between gap-x-6 py-5">
          <td className="py-4 px-6">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              <a href={`/department/${d.id}`}>{d.deptName}</a>
            </p>
          </td>
          {/* Add more table cells (td) for additional data */}
        </tr>
      ))
    )}
        </tbody>
      </table>
    </div>
  );
}
