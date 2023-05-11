import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CheckLogin: FC = () => {
  const navagate = useNavigate();

  const checkToken = () => {
    if (localStorage.getItem("tokenHeader") == "") {
      navagate("/login");
    }
  };

  useEffect(() => {
    checkToken();
  }, []);
  return null;
};
