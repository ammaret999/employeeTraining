import React, { useState } from "react";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";

export const Login = () => {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Login with Google</h1>
            <p className="mb-5 text-2xl">User</p>
            <a
              className="btn btn-primary"
              // href="http://localhost:8080/oauth2/authorization/google"
              href="https://accounts.google.com/o/oauth2/auth?scope=openid&response_type=code&access_type=offline&redirect_uri=http://localhost:3000/token&client_id=611616605716-7vi7b8t378nmtknrism7tglk94bkf3a6.apps.googleusercontent.com"
            >
              Login with Google
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
