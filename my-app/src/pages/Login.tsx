import React from "react"
export const Login = () => {
    return (
        <>
        <div className="hero min-h-screen" >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Login with Google</h1>
              <p className="mb-5 text-2xl">User</p>
              <a className="btn btn-primary" href="http://localhost:8080/oauth2/authorization/google">Login with Google</a>
            </div>
          </div>
        </div>
            <div >
                <a className="btn" href="http://localhost:8080/oauth2/authorization/google" type="button">Login with Google</a>    
            </div>
        </>
    );

}