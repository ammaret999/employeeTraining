import { errorMonitor } from "events";
import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CheckLogin: FC = () => {
  const navagate = useNavigate();
  const checkToken = () => {
    if (
      localStorage.getItem("tokenHeader") == "" ||
      !localStorage.getItem("tokenHeader") ||
      localStorage.getItem("tokenHeader") == undefined
    ) {
      navagate("/login");
    }
  };

  useEffect(() => {
    checkToken();
  }, []);
  return null;
};
