import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { z } from "zod";

export default function DatePicker() {
  const date = new Date();
  async function AddDate(formData: FormData) {
    "use server";
    const validationSchema = z.object({
      startdate: z.string(),
      enddate: z.string(),
    });
    const res = validationSchema.safeParse({
      startdate: formData.get("startdate"),
      enddate: formData.get("enddate"),
    });
    if (res.success) {
      cookies().set("startDate", res.data.startdate);
      cookies().set("endDate", res.data.enddate);
      redirect("dashboard");
    }
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
          defaultValue={cookies().get("startDate")?.value}
        />
        <label htmlFor="enddate">End Date</label>
        <input
          className=" border border-gray-300 text-gray-900 text-md rounded-md m-1  w- ps-10 p-2.5"
          type="date"
          id="enddate"
          name="enddate"
          defaultValue={cookies().get("endDate")?.value}
        />
        <button className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full ml-2">
          Update
        </button>
      </form>
    </div>
  );
}
