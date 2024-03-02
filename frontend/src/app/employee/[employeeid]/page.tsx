import ExployeeProfile from "@/app/Components/EmployeeProfileComponent";
import NavBar from "@/app/Components/Nav";

export default function Page({ params }: { params: { employeeid: number } }) {
  return (
    <div>
      <NavBar />
      <ExployeeProfile id={params.employeeid} />
    </div>
  );
}
