import Employees from "@/app/Components/EmployeeComponent";
import NavBar from "@/app/Components/Nav";

export default function Page({ params }: { params: { deptid: number } }) {
  const deptId = Number(params.deptid)
 
  return (
    <div>
      <NavBar />
      <Employees deptId = {deptId}/>
    </div>
  );
}
