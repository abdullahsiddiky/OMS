export default function Deparment(){
    const deparment = [
        {
          id: 1,
          name: "Department A",
        },
        {
          id: 2,
          name: "Department B",
        },
        {
          id: 3,
          name: "Deparment C",
        },
        {
          id: 4,
          name: "Department D",
        },
        {
          id: 5,
          name: "Deparment E",
        },
        {
            id: 6,
            name: "Deparment F",
          },
      ];
      return (
        <div className="border border-gray-800">
          <table className="min-w-full divide-y divide-gray-100">
            <thead>
              <tr>
                <th className="py-3 px-6 text-left">Deparments</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {deparment.map((deparment) => (
                <tr
                  key={deparment.id}
                  className="flex justify-between gap-x-6 py-5"
                >
                  <td className="py-4 px-6">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      <a href={`/department/${deparment.id}`}>{deparment.name}</a>
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}