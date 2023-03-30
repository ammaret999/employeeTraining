import React, { useEffect, useState } from "react";
import { getPosition } from "../../services";
import { NavbarAdmin, PositionCard } from "../../components";
import { Position } from "../../types";

export const PositionPage = () => {
  const [positions, setPositions] = useState<Position[]>([]);

  useEffect(() => {
    getPosition().then((data: Position[]) => setPositions(data));
  }, []);

  return (
    <>
      <NavbarAdmin />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2"></div>
        <div className="col-span-8 justify-center gap-4 shadow-xl bg-gray-50 mt-5">
          <div className="flex justify-between m-8">
            <button className="btn"> Back </button>
            <button className="btn"> Create Position </button>
          </div>

          <div className="flex justify-center mt-4">
            <p className="text-2xl">Position</p>
          </div>

          <form>
            <div className="grid gap-6 mb-6 grid-cols-12 m-4">
              {positions.map((data) => (
                <PositionCard {...data} />
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
