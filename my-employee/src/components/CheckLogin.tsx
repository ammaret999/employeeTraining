import { errorMonitor } from "events";
import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CheckLogin: FC = () => {
  const navagate = useNavigate();
  //localStorage.getItem("tokenHeader") == ""
  const checkToken = () => {
    if (
      localStorage.getItem("tokenHeader") == "" ||
      !localStorage.getItem("tokenHeader")
    ) {
      navagate("/login");
    }
  };

  useEffect(() => {
    checkToken();
  }, []);
  return null;
};
