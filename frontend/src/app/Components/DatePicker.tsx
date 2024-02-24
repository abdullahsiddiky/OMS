
export default function DatePicker(){
    return(
        <div>
            <form>
            <label htmlFor="startdate" >Start Date</label>
            <input  className=" border border-gray-300 text-gray-900 text-md rounded-md m-1  w- ps-10 p-2.5" type="date" id="startdate" name="startdate"/>
            <label htmlFor="enddate">End Date</label>
            <input  className=" border border-gray-300 text-gray-900 text-md rounded-md m-1  w- ps-10 p-2.5" type="date" id="enddate" name="enddate"/>
            <button className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full ml-2">Update</button>
            </form>
        </div>
   
    )
}