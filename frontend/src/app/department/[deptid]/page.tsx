import Employees from "@/app/Components/EmployeeComponent"

export default function Page({ params }: { params: { deptid: number } }){
    // console.log(params)
    return (
        <div><Employees/></div>
    )
}