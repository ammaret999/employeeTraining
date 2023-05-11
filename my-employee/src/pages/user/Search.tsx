import { useState } from "react";
import { CheckLogin, HomeUserCard, NavbarUser } from "../../components";
import { Employee } from "../../types";
import { getSearchEmployee } from "../../services";
export const Search = () => {
  const [employee, setEmployee] = useState<Employee[]>([]);
  const [keyWord, setKeyWord] = useState<string>("");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    try {
      e.preventDefault();
      setEmployee(await getSearchEmployee(keyWord));
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setKeyWord(event.target.value);

  return (
    <>
      <CheckLogin />
      <NavbarUser />
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-12 gap-4 mb-3">
          <div className="col-span-6 justify-items-end grid">
            <div className="grid col-span-6">
              <input
                type="text"
                name="key"
                value={keyWord}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Employee"
              />
            </div>
          </div>

          <div className="col-span-6 justify-items-start grid">
            <button className="btn">Submit</button>
          </div>
        </div>
      </form>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2"></div>
        <div className="col-span-8 justify-center gap-4">
          <div className="card card-side bg-base-100 shadow-xl m-4 grid grid-cols-12">
            {employee.map((data) => (
              <HomeUserCard {...data} key={data.id} />
            ))}
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </>
  );
};
