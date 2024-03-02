import axios from "../service/instance";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
interface DeleteButtonProps {
  id: string;
}
export default function DeleteButton({ id }: DeleteButtonProps) {
  const token = cookies().get("token")?.value;
  if (!token) {
    redirect("/");
  }
  async function axiosRequests(url: string, id: string) {
    "use server";
    try {
      const result = await axios.post(
        url,
        {
          employeeId: id,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      return result;
    } catch (error) {
      return error;
    }
  }
  async function DeleteEmployee() {
    "use server";
    const data: any = await axiosRequests("users/delete_employee", id);

    if (data.data.status === 200) {
      redirect("/dashboard");
    }
  }
  return (
    <form action={DeleteEmployee}>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-none w-full">
        delete
      </button>
    </form>
  );
}
