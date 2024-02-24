export default function DatePicker() {
    // const endDate = new Date();
    // const startDate = new Date(endDate);
    // startDate.setDate(endDate.getDate() - 30);
    // console.log(endDate)
    // console.log(startDate)
      const formatDate = (date:any) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    const date =  new Date()
    const endDate = formatDate(date).toString()
    date.setDate(date.getDate() - 30);
    const startDate= formatDate(date).toString()
    console.log(endDate)
    console.log(startDate)

   
  return (
    <div>
      <form>
        <label htmlFor="startdate">Start Date</label>
        <input
          className=" border border-gray-300 text-gray-900 text-md rounded-md m-1  w- ps-10 p-2.5"
          type="date"
          id="startdate"
          name="startdate"
          defaultValue={startDate}
        />
        <label htmlFor="enddate">End Date</label>
        <input
          className=" border border-gray-300 text-gray-900 text-md rounded-md m-1  w- ps-10 p-2.5"
          type="date"
          id="enddate"
          name="enddate"
          defaultValue={endDate}
      
        />
        <button className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full ml-2">
          Update
        </button>
      </form>
    </div>
  );
}
