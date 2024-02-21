import ExployeeProfile from "@/app/Components/EmployeeProfileComponent";
import NavBar from "@/app/Components/Nav";

export default function Page({ params }: { params: { employeeid: number } }){
//    console.log(params)
    return(
        <div>
            <NavBar/>
            <ExployeeProfile id={params.employeeid}/>
        </div>
    )

}