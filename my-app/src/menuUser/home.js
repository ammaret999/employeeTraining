import Navbar from "../component/navbar";
function Home() {
  return (
    <>
      <Navbar />

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2"></div>
        {/* mid */}
        <div className="col-span-8 justify-center gap-4">
          <div className="card card-side bg-base-100 shadow-xl m-4">
            <figure>
              <img
                className="object-fill h-80 w-80 object-center bg-black "
                src="https://hips.hearstapps.com/hmg-prod/images/little-cute-maltipoo-puppy-royalty-free-image-1652926025.jpg?crop=0.444xw:1.00xh;0.129xw,0&resize=980:*"
                alt="image"
              />
            </figure>
            <div className="card-body ">
              <div className="card-actions justify-end">
                <h1 className="card-title col-span-4">Status</h1>
              </div>

              <div className="grid grid-cols-12">
                <h1 className="card-title col-span-4">นาย</h1>
                <h1 className="card-title col-span-4">สมชาย</h1>
                <h1 className="card-title col-span-4">ยินดี</h1>
              </div>

              <div className="grid grid-cols-12">
                <h1 className="card-title col-span-4">Department</h1>
                <h1 className="card-title col-span-8">Programer</h1>
              </div>

              <div className="grid grid-cols-12">
                <h1 className="card-title col-span-4">Position</h1>
                <h1 className="card-title col-span-8">HR</h1>
              </div>

              <div className="card-actions justify-end ">
                <button className="btn ">Profile</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2"></div>
      </div>
    </>
  );
}
export default Home;
