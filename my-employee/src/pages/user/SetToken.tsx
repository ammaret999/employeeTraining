import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SetToken = () => {
  const [idToken, setIdToken] = useState<string>("");
  const navagate = useNavigate();

  const getToken = async () => {
    try {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");

      const response = await fetch(`http://localhost:8080/token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: code,
        }),
      });
      const data = await response.json();
      const token = data.id_token;
      setIdToken(token);
      console.log(token);
      console.log("---gettoken---");
    } catch (error) {
      console.error(error);
    }
  };

  const setTokenToLocal = () => {
    localStorage.removeItem("tokenHeader");
    console.log(idToken);
    localStorage.setItem("tokenHeader", idToken);
    navagate(`/`);
  };

  useEffect(() => {
    getToken();
  }, [setTokenToLocal()]);

  return <></>;
};
