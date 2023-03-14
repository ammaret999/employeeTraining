import { Navbar } from "../../components/NavbarAdmin";
export const HomeAdmin = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2"></div>
        <div className="col-span-8 justify-center gap-4 shadow-xl bg-gray-50 mt-5">
          <div className="flex justify-center mt-5">
            <p className="text-2xl">Home</p>
          </div>

          <div className="mb-6 m-4 flex justify-around">
            <div className="">
              <button className="btn">Level</button>
            </div>
            <div className="">
              <button className="btn">Title Name</button>
            </div>
            <div className="">
              <button className="btn">Gender</button>
            </div>
          </div>

          <div className="mb-6 m-4 flex justify-around">
            <div className="">
              <button className="btn">Department</button>
            </div>
            <div className="">
              <button className="btn">Position</button>
            </div>
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </>
  );
};
