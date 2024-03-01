import axios from "../service/instance";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

export default function AddExpense() {
  const token = cookies().get("token")?.value;
  if (!token) {
    redirect("/");
  }
  async function axiosRequests(url: string, title: string, expense: string, amount:number) {
    "use server";
    try {
      const result = await axios.post(
        url,
        {
          title: title,
          expense: expense,
          amount:amount
        },
        {
          headers:{
            Authorization:"Bearer " + token
          }
        }
      );
      return result;
    } catch (error) {
      return error;
    }
  }
  async function AddExpense(formData: FormData) {
    "use server";
    const validationSchema = z.object({
      title: z.string(),
      expense: z.string(),
      amount: z.number(),
    });
    const res = validationSchema.safeParse({
      title: formData.get("title"),
      expense:formData.get('expense'),
      amount: Number(formData.get('amount'))
    });

    if (res.success) {
      const data: any = await axiosRequests(
        "users/add_expense",
        res.data.title,
        res.data.expense,
        res.data.amount
      );
      if (data.data.status === 200) {
        redirect("dashboard");
      } else {
        redirect("/add_department");
      }
    }
  }
  
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm"></div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action={AddExpense}>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Title
            </label>
            <div className="mt-2">
              <input
                id="title"
                name="title"
                type="title"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="expense"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Category
            </label>
            <div className="mt-2">
              <select
                id="expense"
                name="expense"
                autoComplete="expense"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white"
              >
                <option>Salary</option>
                <option>Coffee</option>
                <option>Tea</option>
                <option>Powder Milk</option>
                <option>Sugar</option>
                <option>Toilet Tissue</option>
                <option>Hand Tissue</option>
                <option>Hand wash</option>
                <option>Odonil</option>
                <option>Miscellaneous</option>
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Amount
            </label>
            <div className="mt-2">
              <input
                id="amount"
                name="amount"
                type="number"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 
