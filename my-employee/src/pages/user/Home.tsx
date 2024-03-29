import { useEffect, useState } from "react";
import { NavbarUser, HomeUserCard, CheckLogin } from "../../components";
import { getEmployee } from "../../services/homeUser";
import { Employee } from "../../types";
import { useParams } from "react-router-dom";
import queryString from "query-string";

export const Home = () => {
  const [employee, setEmployee] = useState<Employee[]>([]);

  useEffect(() => {
    getEmployee().then((data: Employee[]) => setEmployee(data));
  }, []);

  return (
    <>
      <CheckLogin />
      <NavbarUser />
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
