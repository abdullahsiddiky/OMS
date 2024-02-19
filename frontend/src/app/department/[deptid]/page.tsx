export default function Page({ params }: { params: { deptid: number } }){
    console.log(params)
    return (
        <div><h1>dsfkal {params.deptid}</h1></div>
    )
}