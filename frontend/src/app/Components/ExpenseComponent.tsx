import axios from "../service/instance";
import { cookies } from "next/headers";
export default async function Expences() {
  const token = cookies().get("token")?.value || "";
  const startDate = cookies().get("startDate")?.value || "";
  const endDate = cookies().get("endDate")?.value || "";
  async function axiosRequests(
    url: string,
    token: string,
    startDate: string,
    endDate: string
  ) {
    "use server";
    try {
      const result = await axios.post(
        url,
        {
          startDate: startDate,
          endDate: endDate,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      return result;
    } catch (error) {
      return error;
    }
  }
  const data: any = await axiosRequests(
    "users/update_expense",
    token,
    startDate,
    endDate
  );
  const expense = [
    {
      id: 1,
      name: "Salary",
      amount: 100,
    },
    {
      id: 2,
      name: "Coffee",
      amount: 50,
    },
    {
      id: 3,
      name: "Tea",
      amount: 350,
    },
    {
      id: 4,
      name: "Powder Milk",
      amount: 110,
    },
    {
      id: 5,
      name: "Electricity",
      amount: 66,
    },
    {
      id: 6,
      name: "Hand Wash",
      amount: 150,
    },
    {
      id: 7,
      name: "Miscellaneous",
      amount: 150,
    },
  ];
  const totalExpense = expense.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div>
      <div className="border border-gray-500 rounded h-[calc(100vh-450px)] overflow-y-auto">
        <table className="min-w-full divide-y divide-gray-100">
          <thead className="sticky top-0 bg-gray-400">
            <tr>
              <th className="py-3 px-5 text-left">Expenses</th>
              <th className="py-3 px-5 text-left"></th>
              <th className="py-3 px-5 text-left">Cost</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 flex-1">
            {data.data.expense.map((expense: any) => (
              expense.expenses.map((item:any)=>(
                <tr className="">
                  <td className="py-4 px-6">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {/* <a href="/">{expense.name}</a> */}
                      <p>{item.category}</p>
                    </p>
                  </td>
                  <td className="py-4 px-6"></td>
                  <td className="py-4 px-6">{item.total}</td>
            </tr>
            ))
            ))}
          </tbody>
          <thead className="sticky bottom-0 bg-gray-400 w-full">
            <tr>
              <td className="py-4 px-6 text-sm font-semibold leading-6 text-gray-900">
                Total
              </td>
              <td></td>
              {data.data.expense.map((item: any) => (
                <td className="py-4 px-6 text-sm font-semibold leading-6 text-gray-900">
                  <p>{item.net_total}</p>
                </td>
              ))}
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}
