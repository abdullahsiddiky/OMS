import DatePicker from "@/app/Components/DatePicker";
import Expences from "@/app/Components/ExpenseComponent";
import Income from "@/app/Components/IncomeComponent";
export default function Page() {
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
console.log(startDate)
  return (
    <div className="border border-gray-500 py-5 px-1.5 rounded h-[calc(100vh-350px)]">
      {/* <DatePicker /> */}
      <form>
        <label htmlFor="startdate">Start Date</label>
        <input
          className=" border border-gray-300 text-gray-900 text-md rounded-md m-1  w- ps-10 p-2.5"
          type="date"
          id="startdate"
          name="startdate"
          defaultValue={startDate}
        />
        <label htmlFor="enddate">End Date</label>
        <input
          className=" border border-gray-300 text-gray-900 text-md rounded-md m-1  w- ps-10 p-2.5"
          type="date"
          id="enddate"
          name="enddate"
          defaultValue={endDate}
        />
        <button className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full ml-2">
          Update
        </button>
      </form>
      <div className="grid grid-col-4 gap-2">
        <div className="col-start-1 col-span-2 ">
          <Expences />
        </div>
        <div className="col-start-3 col-span-2">
          <Income />
        </div>
      </div>
    </div>
  );
}
