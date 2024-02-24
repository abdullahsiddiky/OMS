import { Col, Row } from 'antd';
export default function Income(){
    const expense = [
        {
          id: 1,
          name: "Source A",
          amount:1000
        },
        {
          id: 2,
          name: "Source B",
          amount:500,
        },
        {
          id: 3,
          name: "Source C",
          amount:3500,
        },
        {
          id: 4,
          name: "Source D",
          amount:110,
        },
        {
          id: 5,
          name: "Source E",
          amount:666,
        },
        {
            id: 6,
            name: "Source F",
            amount:150
          },
      ];
      const totalExpense = expense.reduce((total, expense) => total + expense.amount, 0);
     
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
            {expense.map((expense) => (
              <tr key={expense.id} className="">
                <td className="py-4 px-6">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    <a href="/">{expense.name}</a>
                  </p>
                </td>
                <td className="py-4 px-6">
                  {expense.amount}
                </td>
                <td className="py-4 px-6">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">delete</button>
                </td>
              </tr>
            ))}
          
          </tbody>

              <thead className="sticky bottom-0 bg-gray-400 w-full">

                    <tr>
              <td className="py-4 px-6 text-sm font-semibold leading-6 text-gray-900">
                Total
              </td>
              <td className="py-4 px-6 text-sm font-semibold leading-6 text-gray-900">
                {totalExpense}
              </td>
           <td></td>
            </tr>
              </thead>

        </table>
      </div>
     </div>
      );
} 