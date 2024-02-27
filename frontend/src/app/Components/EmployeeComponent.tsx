export default function Employees() {
  const persons = [
    {
      id: 1,
      name: "Mr A",
    },
    {
      id: 2,
      name: "Mr B",
    },
    {
      id: 3,
      name: "Mr C",
    },
    {
      id: 4,
      name: "Mr D",
    },
    {
      id: 5,
      name: "Mr E",
    },
    {
      id: 6,
      name: "Mr F",
    },
  ];

  return (
    <div className="border border-gray-800">
      <table className="min-w-full divide-y divide-gray-100">
        <thead>
          <tr>
            <th className="py-3 px-5 text-left">Name</th>

            <th className="py-3 px-5 text-left">Delete</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {persons.map((person) => (
            <tr key={person.id} className="">
              <td className="py-4 px-6">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  <a href={"/employee/" + person.id}>
                    {person.id} {person.name}
                  </a>
                </p>
              </td>

              <td className="py-4 px-6">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                  delete
                </button>
              </td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
}
