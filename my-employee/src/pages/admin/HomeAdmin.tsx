import { useNavigate } from "react-router-dom";
import { NavbarAdmin } from "../../components";
export const HomeAdmin = () => {
  const navagate = useNavigate();

  return (
    <>
      <NavbarAdmin />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2"></div>
        <div className="col-span-8 justify-center gap-4 shadow-xl bg-gray-50 mt-5">
          <div className="flex justify-center mt-5">
            <p className="text-2xl">Home</p>
          </div>

          <div className="mb-6 m-4 flex justify-around">
            <div className="">
              <button className="btn" onClick={() => navagate(`level`)}>
                Level
              </button>
            </div>
            <div className="">
              <button className="btn" onClick={() => navagate(`title_name`)}>
                Title Name
              </button>
            </div>
            <div className="">
              <button className="btn" onClick={() => navagate(`gender`)}>
                Gender
              </button>
            </div>
          </div>

          <div className="mb-6 m-4 flex justify-around">
            <div className="">
              <button className="btn" onClick={() => navagate(`department`)}>
                Department
              </button>
            </div>
            <div className="">
              <button className="btn" onClick={() => navagate(`position`)}>
                Position
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </>
  );
};
