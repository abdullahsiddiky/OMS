import { z } from "zod";
import axios from "../service/instance";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function AddEmployee() {
  const token = cookies().get("token")?.value;
  if (!token) {
    redirect("/");
  }
  const department = await axios.get("/users/list_departments", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  async function axiosRequests(
    url: string,
    name: string,
    email: string,
    departmentId: number,
    salary: number
  ) {
    "use server";
    try {
      const result = await axios.post(
        url,
        {
          name: name,
          email: email,
          departmentId: departmentId,
          salary: salary,
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
  async function AddEmployee(formData: FormData) {
    "use server";
    const validationSchema = z.object({
      name: z.string(),
      email: z.string().email(),
      departmentId: z.number(),
      salary: z.number(),
    });
    const res = validationSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      departmentId: Number(formData.get("department")),
      salary: Number(formData.get("salary")),
    });
    console.log(res);

    if (res.success) {
      const data: any = await axiosRequests(
        "users/add_employee",
        res.data.name,
        res.data.email,
        res.data.departmentId,
        res.data.salary
      );
      if (data.data.status === 200) {
        redirect("dashboard");
      } else {
        redirect("/add_employee");
      }
    }
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm"></div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action={AddEmployee}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Employee Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="name"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Employee Email address
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
            <label
              htmlFor="department"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Department
            </label>
            <div className="mt-2">
              <select
                id="department"
                name="department"
                autoComplete="department"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white"
              >
                {department.data.map((item: any) => (
                  <div key={item.id}>
                    <h1>{item.fullName}</h1>
                    {item.departments.map((d: any) => (
                      <option key={d.id} value={d.id}>
                        {" "}
                        {d.deptName}
                      </option>
                    ))}
                  </div>
                ))}
              </select>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="salary"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Salary BDT
              </label>
            </div>
            <div className="mt-2">
              <input
                id="salry"
                name="salary"
                type="number"
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
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
