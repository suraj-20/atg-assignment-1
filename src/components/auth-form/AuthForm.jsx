import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

function AuthForm() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="container ">
      <div className="p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <div className="d-flex justify-content-start mb-3">
          <button
            style={{ textDecoration: "none" }}
            className={`btn btn-link ${
              isSignIn ? "text-primary" : "text-secondary"
            }`}
            onClick={() => setIsSignIn(true)}
          >
            Sign In
          </button>
          <button
            style={{ textDecoration: "none" }}
            className={`btn btn-link ${
              !isSignIn ? "text-primary" : "text-secondary"
            }`}
            onClick={() => setIsSignIn(false)}
          >
            Join In
          </button>
        </div>

        <button className="btn btn-outline-primary mb-2 w-100">
          Continue with Google
        </button>
        <button className="btn btn-outline-primary mb-2 w-100">
          Continue with Facebook
        </button>
        <div className="d-flex align-items-center my-3">
          <hr className="flex-grow-1" />
          <span className="px-2">Or connect with</span>
          <hr className="flex-grow-1" />
        </div>
        <form>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="mb-3 position-relative">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
            <span className="position-absolute top-50 end-0 translate-middle-y me-3">
              <i className="bi bi-eye-slash"></i> {/* Add Bootstrap Icons */}
            </span>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div>
              {isSignIn ? (
                <>
                  <input
                    type="checkbox"
                    className="form-check-input me-2"
                    id="rememberMe"
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </>
              ) : (
                ""
              )}
            </div>

            <a href="#" className="text-decoration-none">
              Forgot password?
            </a>
          </div>
          <p>
            {isSignIn ? (
              ""
            ) : (
              <label
                style={{ fontSize: "0.8rem" }}
                className="form-check-label"
                htmlFor="rememberMe"
              >
                By continuing, you agree to our Terms of Service and Privacy
                Policy. Agree and Continue
              </label>
            )}
          </p>
          <button type="submit" className="btn btn-primary w-100">
            {isSignIn ? "Continue" : "Agree and Continue"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AuthForm;
