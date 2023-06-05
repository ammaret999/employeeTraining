import { useNavigate } from "react-router-dom";

interface DepartmentCardProps {
  code: string;
  department: string;
}

export const DepartmentCard: React.FC<DepartmentCardProps> = ({
  code,
  department,
}) => {
  const navagate = useNavigate();

  function deleteDepartment(code: string) {
    fetch(`http://localhost:8080/admin/department/${code}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("tokenHeader")}`,
      },
    }).then((result) => {
      result.json();
    });
  }
  return (
    <>
      <div className="col-span-4 bg-gray-100 justify-center">
        <div className="card bg-base-100 shadow-xl ">
          <div className="card-body">
            <h2 className="card-title justify-center">{department}</h2>
            <div className="card-actions justify-between">
              <button
                className="btn btn-primary"
                onClick={() => navagate(`/admin/home/department/edit/${code}`)}
              >
                Edit
              </button>
              <button
                className="btn btn-primary"
                onClick={() => deleteDepartment(code)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
