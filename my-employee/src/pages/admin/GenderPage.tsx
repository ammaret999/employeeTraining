import { NavbarAdmin } from "../../components/NavbarAdmin";
import { GenderCard } from "../../components/GenderCard";
import { Gender } from "../../types/gender";
import { getGender } from "../../services";
import React, { useEffect, useState } from "react";

export const GenderPage = () => {
  const [gender, setgender] = useState<Gender[]>([]);

  useEffect(() => {
    getGender().then((data: Gender[]) => setgender(data));
  }, []);

  return (
    <>
      <NavbarAdmin />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2"></div>
        <div className="col-span-8 justify-center gap-4 shadow-xl bg-gray-50 mt-5">
          <div className="flex justify-between m-8">
            <button className="btn"> Back </button>
            <button className="btn"> Create Gender </button>
          </div>

          <div className="flex justify-center mt-4">
            <p className="text-2xl">Gender</p>
          </div>

          <form>
            <div className="grid gap-6 mb-6 grid-cols-12 m-4">
              {gender.map((data) => (
                <GenderCard {...data} />
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
