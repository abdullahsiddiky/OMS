import axios from "../service/instance";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
export default async function Login() {
  const id = cookies().get("token")?.value;
  if (id) {
    redirect("dashboard");
  }
  async function axiosRequests(url: string, email: string, password: string) {
    "use server";
    try {
      const result = await axios.post(
        url,
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      );
      return result;
    } catch (error) {
      return error;
    }
  }
  async function login(formData: FormData) {
    "use server";
    function formatDate(date: any) {
      // 'use server'
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }
    const validationSchema = z.object({
      email: z.string().email(),
      password: z.string(),
    });
    const res = validationSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    });
    // console.log(res)
    if (res.success) {
      const data: any = await axiosRequests(
        "users/login",
        res.data.email,
        res.data.password
      );
      if (data.data.status == 200) {
        console.log(data.data.token);
        const date = new Date();
        const endDate = formatDate(date).toString();
        date.setDate(date.getDate() - 30);
        const startDate = formatDate(date).toString();
        cookies().set("token", data.data.token.token);
        console.log(startDate);
        cookies().set("startDate", startDate);
        cookies().set("endDate", endDate);
        redirect("dashboard");
      } else {
        console.log(data);
        redirect("/");
      }
    }
  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm"></div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action={login}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm"></div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <a
            href="/signup"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            SIGNUP
          </a>
        </p>
      </div>
    </div>
  );
}
