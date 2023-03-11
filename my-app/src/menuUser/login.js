function Login() {

    return(
        <>
        <div class="hero min-h-screen" >
          <div class="hero-overlay bg-opacity-60"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold">Login with Google</h1>
              <p class="mb-5 text-2xl">User</p>
              <a class="btn btn-primary" href="http://localhost:8080/oauth2/authorization/google">Login with Google</a>
            </div>
          </div>
        </div>
            <div >
                <a class="btn" href="http://localhost:8080/oauth2/authorization/google" type="button">Login with Google</a>    
            </div>
        </>
    );

}
export default Login;