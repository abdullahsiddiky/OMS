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
    // console.log(data.data.income)
  
  const income = [
    {
      id: 1,
      name: "Source A",
      amount: 1000,
    },
    {
      id: 2,
      name: "Source B",
      amount: 500,
    },
    {
      id: 3,
      name: "Source C",
      amount: 3500,
    },
    {
      id: 4,
      name: "Source D",
      amount: 110,
    },
    {
      id: 5,
      name: "Source E",
      amount: 666,
    },
    {
      id: 6,
      name: "Source F",
      amount: 150,
    },
  ];

  const totalIncome = income.reduce(
    (total, income) => total + income.amount,
    0
  );

  return (
    <div>
      <div className="border border-gray-800 rounded h-[calc(100vh-450px)] overflow-y-auto">
        <table className="min-w-full divide-y divide-gray-100">
          <thead className="sticky top-0 bg-gray-400">
            <tr>
              <th className="py-3 px-5 text-left">Income</th>
              <th className="py-3 px-5 text-left">Amount</th>
              <th className="py-3 px-5 text-left">Delete</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.data.income.map((income:any) => (
              income.incomes.map((item:any)=>(

                  <tr key={item.id} className="">
                    <td className="py-4 px-6">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        {/* <a href="/">{expense.name}</a> */}
                        <p>{item.title}</p>
                      </p>
                    </td>
                    <td className="py-4 px-6">{income.amount}</td>
                    <td className="py-4 px-6">
                      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                        delete
                      </button>
                    </td>
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
              {data.data.income.map((item:any)=>(

              <td key={item.id}className="py-4 px-6 text-sm font-semibold leading-6 text-gray-900">
                {/* {totalIncome} */}
                <p>{item.net_total}</p>
              </td>
              ))

              }
              <td></td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}
