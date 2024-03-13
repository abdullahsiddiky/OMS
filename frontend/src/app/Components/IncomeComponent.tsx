import { string } from "zod";
import axios from "../service/instance";
import { cookies } from "next/headers";

export default async function Income() {
  const token = cookies().get('token')?.value  || ''
  const startDate = cookies().get('startDate')?.value || ''
  const endDate = cookies().get('endDate')?.value || ''
  async function axiosRequests(url: string, token:string, startDate: string, endDate: string) {
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

    const data:any = await axiosRequests('users/update_income', token, startDate, endDate)
  return (
    <div>
      <div className="border border-gray-800 rounded h-[calc(100vh-450px)] overflow-y-auto">
        <table className="min-w-full divide-y divide-gray-100  flex flex-col h-full">
          <thead className="sticky top-0 bg-gray-400">
            <tr>
              <th className="py-3 px-5 text-left">Income</th>
              <th className="py-3 px-5 text-left"></th>
              <th className="py-3 px-5 text-left">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 flex-1">
            {data.data.income.map((income:any) => (
              income.incomes.map((item:any)=>(
                  
                  <tr key={item.id} className="">
                    <td className="py-4 px-6">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        {/* <a href="/">{expense.name}</a> */}
                        <p>{item.title}</p>
                      </p>
                    </td>
                    <td className="py-4 px-6"></td>
                    <td className="py-4 px-6">{item.amount}</td>
              </tr>
              ))
            ))
          }
          </tbody>

          <thead className="sticky bottom-0 bg-gray-400 w-full">
            <tr>
              <td className="py-4 px-6 text-sm font-semibold leading-6 text-gray-900">
                Total
              </td>
              <td></td>
              {data.data.income.map((item:any)=>(

              <td key={item.id}className="py-4 px-6 text-sm font-semibold leading-6 text-gray-900">
                {/* {totalIncome} */}
                <p>{item.net_total}</p>
              </td>
              ))
              }
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}
