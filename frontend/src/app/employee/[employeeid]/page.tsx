import ExployeeProfile from "@/app/Components/EmployeeProfileComponent";

export default function Page({ params }: { params: { employeeid: number } }){
   console.log(params)
    return(
        <div>
            <ExployeeProfile id={params.employeeid}/>
        </div>
    )

}