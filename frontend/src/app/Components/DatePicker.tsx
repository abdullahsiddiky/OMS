
import { cookies } from 'next/headers'
import { redirect } from "next/navigation";
import { z } from 'zod';
export default function DatePicker() {
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
  const startDate = formatDate(date).toString()
  async function AddDate(formData: FormData) {
    "use server";
    // const validationSchema = z.object({
    //   startDate: z.string(),
    //   endDate: z.string(),
    // });
    // const res = validationSchema.safeParse({
    //   startDate: formData.get("startDate"),
    //   endDate:formData.get("endDate"),
    // });
    // if (res.success) {
    //   console.log(res.data.endDate)
    // }
    // console.log(formData.get('endDate'))

      
  }
  return (
    <div>
      <form action={AddDate}>
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
          id="endDate"
          name="endDate"
          defaultValue={endDate}
        />
        <button className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full ml-2">
          Update
        </button>
      </form>
    </div>
  );
}
