import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Profile() {
  const [profile, setProfile] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    role: "USER",
    _id: "",
  });
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const fetchProfile = async () => {
    const account = await client.profile();
    setProfile(account);
  };

  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/Account/Signin");
  };

  const save = async () => {
    await client.updateUser(profile);
    setSuccess(true);
    fetchProfile();
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      {success && (
        <div className="alert alert-success" role="alert" style={{ width: '100%', marginBottom: '20px' }}>
          Profile updated successfully
        </div>
      )}
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Profile</h1>
      <Link to="/Kanbas/Account/Admin/Users">
        <button className="btn btn-warning w-100" style={{ marginBottom: '20px' }}>Users</button>
      </Link>
      {profile && (
        <div>
          <div style={{ marginBottom: '15px' }}>
            <label className="form-label">Username</label>
            <input
              className="form-control"
              value={profile.username}
              onChange={(e) => setProfile({ ...profile, username: e.target.value })}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={profile.password}
              onChange={(e) => setProfile({ ...profile, password: e.target.value })}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label className="form-label">First Name</label>
            <input
              className="form-control"
              value={profile.firstName}
              onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label className="form-label">Last Name</label>
            <input
              className="form-control"
              value={profile.lastName}
              onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              value={profile.dob}
              onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label className="form-label">Email</label>
            <input
              className="form-control"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label className="form-label">Role</label>
            <select
              className="form-control" 
              value={profile.role}
              onChange={(e) => setProfile({ ...profile, role: e.target.value })}
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </select>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button className="btn btn-success" onClick={save}>
              Save
            </button>
            <button className="btn btn-danger" onClick={signout}>
              Signout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}