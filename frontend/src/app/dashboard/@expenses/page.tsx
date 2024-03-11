
import DatePicker from "@/app/Components/DatePicker";
import Expences from "@/app/Components/ExpenseComponent";
import Income from "@/app/Components/IncomeComponent";
import Tables from "@/app/Components/tables";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default function Page() {
  const token = cookies().get("token")?.value;
  if (!token) {
    redirect("/");
  }
  const formatDate = (date: any) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const date = new Date();
  const endDate = formatDate(date).toString();
  date.setDate(date.getDate() - 30);
  const startDate = formatDate(date).toString();
  // console.log(startDate);
  
  return (
    <div className="border border-gray-500 py-5 px-1.5 rounded h-[calc(100vh-350px)]">
      <DatePicker />
      <div className="grid grid-col-4 gap-2">
        <div className="col-start-1 col-span-2 ">
          <Expences  />
        </div>
        <div className="col-start-3 col-span-2">
          <Income />
        </div>
      </div>
    </div>
  );
}
