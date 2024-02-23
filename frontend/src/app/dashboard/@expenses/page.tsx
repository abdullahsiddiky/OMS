import Expences from "@/app/Components/ExpenseComponent";
import Income from "@/app/Components/IncomeComponent";
import { Col, Row } from 'antd';
export default function Page(){
    return (
        <div className="border border-gray-800 py-5 px-1.5 rounded">
          
      <Expences/>
      <Income/>

           
        </div>
    )
}