import React, { useState } from "react";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";

export const Login = () => {
  // const [user, setUser] = useState([]);
  // const [profile, setProfile] = useState([]);

  // const responseMessage = (response: any) => {
  //   console.log(response);
  // };

  // const login = useGoogleLogin({
  //   onSuccess: (codeResponse: any) => setUser(codeResponse),
  //   onError: (error: any) => console.log("Login Failed:", error),
  // });

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Login with Google</h1>
            <p className="mb-5 text-2xl">User</p>
            {/* <GoogleLogin onSuccess={responseMessage} /> */}
            <a
              className="btn btn-primary"
              href="http://localhost:8080/oauth2/authorization/google"
              // href="https://accounts.google.com/o/oauth2/auth?scope=https://www.googleapis.com/auth/drive&response_type=code&access_type=offline&redirect_uri=http://localhost:3000&client_id=706911901274-4riu2c8i4010kv7jdnvuld8qoapds7h1.apps.googleusercontent.com"
            >
              Login with Google
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
