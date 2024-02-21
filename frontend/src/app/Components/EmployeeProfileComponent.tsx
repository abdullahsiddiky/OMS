import { Card } from 'antd';
interface EmployeeProfileProps {
    id: number;
  }
export default function ExployeeProfile({ id }: EmployeeProfileProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
    <Card title="Employee Profile" bordered={true} style={{ width: 600 }}>
      <p>Employee Id:{id}</p>
      <p>Employee Name</p>
      <p>Employee Salary </p>
      <p>Employee Per Annum </p>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-none w-full">delete</button>
    </Card>

  </div>
  );
}
