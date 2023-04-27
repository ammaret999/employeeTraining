import { NavbarAdmin } from "../../components/NavbarAdmin";
import { DepartmentCard } from "../../components/DepartmentCard";
import { Department } from "../../types";
import { useEffect, useState } from "react";
import { getDepartment } from "../../services";
import { useNavigate } from "react-router-dom";
export const DepartmentPage = () => {
  const [department, setDepartment] = useState<Department[]>([]);
  const navagate = useNavigate();

  useEffect(() => {
    getDepartment().then((data: Department[]) => setDepartment(data));
  }, []);
  return (
    <>
      <NavbarAdmin />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2"></div>
        <div className="col-span-8 justify-center gap-4 shadow-xl bg-gray-50 mt-5">
          <div className="flex justify-between m-8">
            <button className="btn" onClick={() => navagate(`/admin/home/`)}>
              Back
            </button>
            <button className="btn" onClick={() => navagate(`create`)}>
              Create department
            </button>
          </div>

          <div className="flex justify-center mt-4">
            <p className="text-2xl">Department</p>
          </div>

          <form>
            <div className="grid gap-6 mb-6 grid-cols-12 m-4">
              {department.map((data) => (
                <DepartmentCard {...data} key={data.id} />
              ))}
            </div>
          </form>

          <div className="grid gap-6 mb-6 grid-cols-2 m-4"></div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </>
  );
};