import axios from "../service/instance";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Card } from "antd";
interface EmployeeProfileProps {
  id: number;
}
export default async function ExployeeProfile({ id }: EmployeeProfileProps) {
  const token = cookies().get('token')?.value
  if(!token){
    redirect("/")
  }
  const employee = await axios.post('/users/employee_information', 
  {
    employeeId:id
  },
  {
    headers: {
      Authorization: "Bearer " + token,
    },
  }
  )
  console.log(employee)
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <Card title="Employee Profile" bordered={true} style={{ width: 600 }}>
        <p>Employee Id:{employee.data.id}</p>
        <p>Employee Name: {employee.data.name}</p>
        <p>Employee Department: {employee.data.departmentId}</p>
        <p>Employee Salary:{employee.data.salary} </p>
        <p>Salary Per Annum: {employee.data.salary*12} </p>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-none w-full">
          delete
        </button>
      </Card>
    </div>
  );
}
