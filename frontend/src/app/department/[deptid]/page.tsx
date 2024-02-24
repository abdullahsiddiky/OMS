import Employees from "@/app/Components/EmployeeComponent";
import NavBar from "@/app/Components/Nav";

export default function Page({ params }: { params: { deptid: number } }) {
  // console.log(params)
  return (
    <div>
      <NavBar />
      <Employees />
    </div>
  );
}
