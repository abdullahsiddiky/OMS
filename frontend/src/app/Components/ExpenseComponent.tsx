
export default function Expences(){
    const expense = [
        {
          id: 1,
          name: "Cost A",
          amount:100
        },
        {
          id: 2,
          name: "Cost B",
          amount:50,
        },
        {
          id: 3,
          name: "Cost C",
          amount:350,
        },
        {
          id: 4,
          name: "Cost D",
          amount:110,
        },
        {
          id: 5,
          name: "Cost E",
          amount:66,
        },
        {
            id: 6,
            name: "Cost F",
            amount:150
          },
      ];
      const totalExpense = expense.reduce((total, expense) => total + expense.amount, 0);
     
      return (
        <div className="border border-gray-800 py-5 px-1.5">

        <p>Date</p>
        <div className="border border-gray-800">
        <table className="min-w-full divide-y divide-gray-100">
          <thead>
            <tr>
              <th className="py-3 px-5 text-left">Expenses</th>
              <th className="py-3 px-5 text-left">Cost</th>
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
            <tr>
              <td className="py-4 px-6 text-sm font-semibold leading-6 text-gray-900">
                Total
              </td>
              <td className="py-4 px-6 text-sm font-semibold leading-6 text-gray-900">
                {totalExpense}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
        </div>
      );
}