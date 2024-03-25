import DatePicker from "@/app/Components/DatePicker";
import Expences from "@/app/Components/ExpenseComponent";
import Income from "@/app/Components/IncomeComponent";
import Tables from "@/app/Components/tables";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default function Page() {
  const token = cookies().get("token")?.value;
  const startDate = cookies().get('startDate')?.value
  const endDate = cookies().get('endDate')?.value
  if (!token) {
    redirect("/");
  }
  return (
    <div className="border border-gray-500 py-5 px-1.5 rounded h-[calc(100vh-350px)]">
      <DatePicker />
      <div className="grid grid-col-4 gap-2">
        <div className="col-start-1 col-span-2 ">
          {/* <Expences  /> */}
        </div>
        <div className="col-start-3 col-span-2">
          {/* <Income /> */}
        </div>
      </div>
    </div>
  );
}
