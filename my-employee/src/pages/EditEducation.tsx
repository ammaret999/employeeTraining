import {Navbar} from "../components/Navbar"

export const EditEducation = () =>  {
  return (
    <>
      <Navbar />
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-2"></div>

            <div className="col-span-8 justify-center gap-4 shadow-xl bg-gray-50 mt-5">
                <div className="flex justify-center mt-5">
                    <p className="text-2xl">Edit Education</p>
                </div>

                <form>
                <div className="grid gap-6 mb-6 grid-cols-2 m-4">

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Level
                    </label>
                    <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="First name"
                    >
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    </select>
                </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Institution
                </label>
                <input
                  type="text"
                  id="Pnumber"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Certificate"
                  required
                />
              </div>

            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Discription
                </label>
                <input
                  type="text"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Discription"
                  required
                />
              </div>
            </div>
          </form>

          <div className="grid grid-cols-12 gap-4 mb-3">
            <div className="col-span-6 justify-items-end grid">
              <button className="btn">Submit</button>
            </div>
            <div className="col-span-6 justify-items-start grid">
              <button className="btn">Cancle</button>
            </div>
          </div>

            </div>
        
            <div className="col-span-2"></div>
        </div>
    </>
  )
}