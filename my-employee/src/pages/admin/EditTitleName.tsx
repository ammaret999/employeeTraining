import { useNavigate, useParams } from "react-router-dom";
import { NavbarAdmin } from "../../components/NavbarAdmin";
import { useEffect, useState } from "react";
import { TitleNameEdit } from "../../types";

export const EditTitleName = () => {
  const [edit, setEdit] = useState<TitleNameEdit>({
    titleName: "",
    code: "",
  });
  const navagate = useNavigate();
  const { code } = useParams();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEdit((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const getTitleNameByCode = () => {
    fetch(`http://localhost:8080/admin/title/${code}`)
      .then((res) => res.json())
      .then((res) => {
        setEdit(res);
      });
  };

  useEffect(() => {
    getTitleNameByCode();
  }, []);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    try {
      e.preventDefault();
      const response = await fetch(
        `http://localhost:8080/admin/title/${code}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(edit),
        }
      );
      if (response.status === 200) {
        alert("User edit successfully");
        navagate("/admin/home/title_name");
      } else {
        alert("User edit error");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <NavbarAdmin />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2"></div>

        <div className="col-span-8 justify-center gap-4 shadow-xl bg-gray-50 mt-5">
          <div className="flex justify-between m-8">
            <button
              className="btn"
              onClick={() => navagate(`/admin/home/title_name`)}
            >
              Back
            </button>
          </div>
          <div className="flex justify-center mt-5">
            <p className="text-2xl">Edit Title Name</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 grid-cols-1 m-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Title Name
                </label>
                <input
                  type="text"
                  name="titleName"
                  value={edit.titleName}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Title name"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 mb-3">
              <div className="col-span-6 justify-items-end grid">
                <button className="btn" type="submit">
                  Submit
                </button>
              </div>
              <div className="col-span-6 justify-items-start grid">
                <button
                  className="btn"
                  onClick={() => navagate(`/admin/home/title_name`)}
                >
                  Cancle
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="col-span-2"></div>
      </div>
    </>
  );
};
