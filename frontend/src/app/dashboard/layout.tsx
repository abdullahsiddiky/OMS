import { Col, Row } from "antd";
export default function DashboardLayout({
  children,
  departments,
  expenses,
  operations
}: {
  children: React.ReactNode;
  departments: React.ReactNode;
  expenses: React.ReactNode;
  operations:React.ReactNode
}) {
  return (
    <>
      {children}
      <div className="grid grid-cols-3 gap-6">
        <div >
          {departments}
        </div>
        <div >
          {expenses}
        </div>
        <div >
          {operations}
        </div>
      </div>
    </>
  );
}
