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
  operations: React.ReactNode;
}) {
  return (
    <>
      {children}
      <NavBar />
      <div className="grid grid-col-6 gap-2">
        <div className="col-start-1 col-span-1">{departments}</div>
        <div className="col-start-2 col-span-4">{expenses}</div>
        <div className="col-start-6 col-span-1">{operations}</div>
      </div>
    </>
  );
}
