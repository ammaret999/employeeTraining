import { NavbarAdmin } from "../../components/NavbarAdmin";
import { LevelCard } from "../../components/LevelCard";
import { getLevel } from "../../services/level";
import { useEffect, useState } from "react";
import { Level } from "../../types";

export const LevelPage = () => {
    const [level, setLevel] = useState<Level[]>([]);

    useEffect(() => {
      getLevel().then((data: Level[]) => setLevel(data));
    }, []);
  return (
    <>
      <NavbarAdmin />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2"></div>
        <div className="col-span-8 justify-center gap-4 shadow-xl bg-gray-50 mt-5">
          <div className="flex justify-between m-8">
            <button className="btn"> Back </button>
            <button className="btn"> Create Level </button>
          </div>

          <div className="flex justify-center mt-4">
            <p className="text-2xl">Level</p>
          </div>

          <form>
            <div className="grid gap-6 mb-6 grid-cols-12 m-4">
              {level.map((data) => (
                <LevelCard {...data} />
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
