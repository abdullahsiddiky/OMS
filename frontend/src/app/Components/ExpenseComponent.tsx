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
      return (
        <div className="border border-gray-800">
          <table className="min-w-full divide-y divide-gray-100">
            <thead>
              <tr>
                <th className="py-3 px-6 text-left">Expenses</th>
                <th className="py-3 px-6 text-left">Expenses</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {expense.map((expense) => (
                <tr
                  key={expense.id}
                  className="flex justify-between gap-x-6 py-5"
                >
                  <td className="py-4 px-6">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      <a href="/">{expense.name}</a>
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}