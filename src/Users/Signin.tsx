import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Signin() {
  const [credentials, setCredentials] = useState<User>({
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "USER",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const signin = async (e:any) => {
    e.preventDefault();
    try {
      await client.signin(credentials);
      navigate("/Kanbas/Account/Profile");
    } catch (err:any) {
      setError(err.response?.data?.message || "An error occurred during sign in. Please try again.");
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <form
        onSubmit={signin}
        className="card p-4"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h1 className="text-center mb-4">Sign In</h1>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            required
          />
        </div>
        <div className="mb-3 position-relative">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            id="password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            required
          />
          <button
            type="button"
            className="btn position-absolute top-50 end-0 translate-middle-y"
            onClick={() => setShowPassword(!showPassword)}
            style={{ background: "none", border: "none", cursor: "pointer", marginTop:"15px" }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="d-grid gap-2">
          <button
            type="submit"
            className="btn btn-success"
            disabled={!credentials.username || !credentials.password}
          >
            Sign In
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => navigate("/Kanbas/Account/Signup")}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}