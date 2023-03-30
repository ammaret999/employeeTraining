import { useEffect, useState } from "react";
import { NavbarUser } from "../../components";
import { getUserById } from "../../services";
import { Employee, ImageBase64 } from "../../types";

export const Profile = () => {
  const [employee, setEmployee] = useState<Employee[]>([]);

  // useEffect(() => {
  //   fetch(`http://localhost:8080/employee/${code}`)
  //     .then((res) => res.json())
  //     .then((data: Employee[]) => setEmployee(data));
  // }, []);
  // console.log(employee);

  return (
    <>
      <NavbarUser />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2"></div>
        <div className="col-span-8 justify-center gap-4 shadow-xl bg-gray-50 mt-5">
          <div className="grid grid-cols-12 m-5">
            <div className="col-span-6 justify-start">
              <button className="btn flex">Back</button>
            </div>
            <div className="col-span-6 flex justify-end">
              <button className="btn ">Edit Profile</button>
            </div>
          </div>

          <div className="flex justify-center mt-5">
            <p className="text-2xl">Profile</p>
          </div>

          <div className="grid justify-center m-5">
            <img
              className="object-fill h-80 w-80 object-center bg-black "
              src="https://hips.hearstapps.com/hmg-prod/images/little-cute-maltipoo-puppy-royalty-free-image-1652926025.jpg?crop=0.444xw:1.00xh;0.129xw,0&resize=980:*"
              alt="image"
            />
          </div>

          <div className="grid justify-center">
            <div className="grid gap-6 mb-6 md:grid-cols-3 m-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Title name
                </label>
                <div>Mr.</div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  First name
                </label>
                <div>kao</div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Last name
                </label>
                <div>kao</div>
              </div>
            </div>

            <div className="grid gap-6 mb-6 md:grid-cols-2 m-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Nick name
                </label>
                <div>Kao</div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Bright day
                </label>
                <div>09/09/2545</div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Gender
                </label>
                <div>Male</div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Slack name
                </label>
                <div>Kao(DII)</div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Phone number
                </label>
                <div>0610001111</div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <div>kao@appman.ac.th</div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  StartDate
                </label>
                <div>09/09/2545</div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  EndDate
                </label>
                <div>09/09/2545</div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Department
                </label>
                <div>Dev</div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Position
                </label>
                <div>Programer</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12"></div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </>
  );
};
