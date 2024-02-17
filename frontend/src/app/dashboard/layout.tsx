import { Col, Row } from "antd";
export default function Layout({
  children,
  departments,
  expenses,
}: {
  children: React.ReactNode;
  departments: React.ReactNode;
  expenses: React.ReactNode;
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
          <h1>operation</h1>
        </div>
      </div>
    </>
  );
}
