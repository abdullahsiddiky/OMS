"use client";
// import { cookies } from "next/headers";
import Expences from "./ExpenseComponent";
import Income from "./IncomeComponent";
// import { redirect } from "next/navigation";
import axios from "../service/instance";
import { useEffect, useState } from "react";

interface Props {
  token: string;
}
export default function Tables({ token }: Props) {
  const formatDate = (date: any) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const [data, setData] = useState("");
  const [startDate, setStartDate] = useState(formatDate(new Date()).toString());
  const [endDate, setEndDate] = useState(formatDate(new Date()).toString());

  // useEffect(() => {

  //   axios
  //     .post(
  //       "users/update_expense",
  //       {
  //         startDate: startDate,
  //         endDate: endDate,
  //       },
  //       {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       }
  //     )
  //     .then((respoense) => {
  //       console.log("hit");
  //       setData(respoense.data);
  //       console.log(respoense.data);
  //       if (data) {
  //         console.log("yes");
  //       } else {
  //         console.log("no");
  //       }
  //     });
  // }, []);

  function axiosRequests(
    urlExpense: string,

    startDate: string,
    endDate: string
  ) {
    // "use server";
    console.log("scope");
    // try {
    //   axios
    //     .post(
    //       urlExpense,
    //       {
    //         startDate: startDate,
    //         endDate: endDate,
    //       },
    //       {
    //         headers: {
    //           Authorization: "Bearer " + token,
    //         },
    //       }
    //     )
    //     .then((respoense) => {
    //       console.log("hit");
    //       setData(respoense.data);
    //       console.log(respoense.data);
    //     });

    //   console.log(data);
    //   return;
    //   // return {
    //   //   expense,
    //   //   income,
    //   // };
    // } catch (error) {
    //   return error;
    // }
  }
  const handleSubmit= async (e:any)=>{
    e.preventDefault()
  //   await axios.post('users/update_expenses',{
  //     startDate:startDate,
  //     endDate:endDate
  //   },
  //   {
  //     headers:{
  //       Authorization:"Bearer " + token
  //     }
  //   }
  // )
  console.log(startDate)
  console.log(endDate)
    console.log('handle scope')
  }

  return (
    <div className="border border-gray-500 py-5 px-1.5 rounded h-[calc(100vh-350px)]">
      <form onSubmit={handleSubmit}> 
        <label htmlFor="startdate">Start Date</label>
        <input
          className=" border border-gray-300 text-gray-900 text-md rounded-md m-1  w- ps-10 p-2.5"
          type="date"
          id="startdate"
          name="startdate"
          defaultValue={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label htmlFor="enddate">End Date</label>
        <input
          className=" border border-gray-300 text-gray-900 text-md rounded-md m-1  w- ps-10 p-2.5"
          type="date"
          id="enddate"
          name="enddate"
          defaultValue={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button
          className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full ml-2"
          type="button"
          onClick={()=>{console.log("dfsakdf")}}
          >
          Update
        </button>
        {JSON.stringify(startDate)}
      </form>
      <div className="grid grid-col-4 gap-2">
        <div className="col-start-1 col-span-2 ">
          <Expences  token ={token}/>
        </div>
         <div className="col-start-3 col-span-2">d
          <Income />
        </div>
      </div>
    </div>
  );
}
