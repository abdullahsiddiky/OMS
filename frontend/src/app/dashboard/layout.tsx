import { Col, Row } from "antd";
import NavBar from "../Components/Nav";

export default function DashboardLayout({
  children,
  departments,
  expenses,
  operations,
  
}: {
  children: React.ReactNode;
  departments: React.ReactNode;
  expenses: React.ReactNode;
  operations:React.ReactNode
  
}) {
  return (
    <>
      {children}
      <NavBar/>
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
