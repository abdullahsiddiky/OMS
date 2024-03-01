import { cookies } from "next/headers";
import axios from "../service/instance";
import { redirect } from "next/navigation";

export async function GET() {
  const token = cookies().get("token")?.value;
  console.log(token);
  const res = await axios.post(
    "users/logout",
    {},
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  if (res.data.status === 200) {
    cookies().delete("token");
    redirect("/");
  }
  // try {
  // } catch (error) {
  //   return error;
  // }
}
