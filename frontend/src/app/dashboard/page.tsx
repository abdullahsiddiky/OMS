import { cookies } from "next/headers";
import DatePicker from "../Components/DatePicker";
import Deparment from "../Components/DepartmentComponent";
import NavBar from "../Components/Nav";
import Operation from "../Components/OperationComponent";
import Expences from "../Components/ExpenseComponent";
import Income from "../Components/IncomeComponent";
import { redirect } from "next/navigation";

export default function Page() {
  const token = cookies().get("token")?.value;
  if (!token) {
    redirect("/");
  }
  return (
    <>
    </>
    // <div className="grid grid-col-6 gap-2">
    //   <div className="col-start-1 col-span-1"> 
    //     <Deparment />
    //   </div>
    //   <div className="col-start-2 col-span-4">
    //   <DatePicker />
    //     <div className="grid grid-col-4 gap-2">
    //       <div className="col-start-1 col-span-2 ">
    //         <Expences />
    //       </div>
    //       <div className="col-start-3 col-span-2">
    //         <Income/>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="col-start-6 col-span-1">
    //     <Operation />
    //   </div>
    // </div>
  );
}
