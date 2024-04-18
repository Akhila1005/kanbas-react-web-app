import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Signup() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const signup = async () => {
    try {
      await client.signup(user);
      navigate("/Kanbas/Account/Profile");
    } catch (err:any) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: "22rem" }}>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <h1 className="card-title text-center mb-4">Signup</h1>
        <form onSubmit={signup}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={user.username}
              required
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
          <div className="mb-4 position-relative">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="password"
              value={user.password}
              required
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <button
              type="button"
              className="btn position-absolute top-50 end-0 translate-middle-y pe-2"
              onClick={() => setShowPassword(!showPassword)}
              style={{ border: "none", background: "none",  marginTop: '15px' }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit" disabled={!user.username || !user.password}>
              Signup
            </button>
            <button className="btn btn-success" onClick={() => navigate("/Kanbas/Account/Signin")}>
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}