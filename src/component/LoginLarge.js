import App from "../App";
import React from "react";
import root from "..";

/* untuk tampilan layar dekstop*/
function LoginLarge(props) {
  function open() {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }

  return (
    <section
      className="text-center vh-100 pt-5 "
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div
        className="card mx-auto shadow-5-strong"
        style={{
          width: "605px",
          background: "hsla(0, 0%, 100%, 0.8)",
          backdropfilter: "blur(30px)",
        }}
      >
        <div className="card-body py-5 px-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-5">Sign up now</h2>
              <form>
                <div className="form-outline mb-4">
                  <label className="form-label">Email address</label>
                  <input type="email" id="form3Example3" className="form-control" />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label">Password</label>
                  <input type="password" id="form3Example4" className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-4" onClick={open}>
                  Sign up
                </button>

                <div className="text-center">
                  <p>or sign up with:</p>
                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-twitter"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </button>

                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </button>

                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-github"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginLarge;
