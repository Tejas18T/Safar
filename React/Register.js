import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [userType, setUserType] = useState(null);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Use navigate for programmatic routing

  const handleUserTypeSelect = (type) => {
    setUserType(type);
    setFormData({});
    setError(null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const url =
        userType === "tourist"
          ? "http://localhost:8080/newUser"
          : "http://localhost:8080/newCompany";

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error((await response.text()) || "Registration failed.");
      }

      alert("Registration successful!");
      setFormData({});
      setUserType(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const renderForm = () => {
    if (!userType) return null;

    const commonFields = (
      <>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              onChange={handleChange}
              value={formData.username || ""}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onChange={handleChange}
              value={formData.email || ""}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={handleChange}
              value={formData.password || ""}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="contactno" className="form-label">
              Contact No
            </label>
            <input
              type="number"
              className="form-control"
              id="contactno"
              name="contactno"
              onChange={handleChange}
              value={formData.contactno || ""}
              required
            />
          </div>
        </div>
      </>
    );

    return (
      <div>
        {userType === "tourist" && (
          <>
            {commonFields}
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="firstname" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  name="firstname"
                  onChange={handleChange}
                  value={formData.firstname || ""}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastname" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  name="lastname"
                  onChange={handleChange}
                  value={formData.lastname || ""}
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-12">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  onChange={handleChange}
                  value={formData.address || ""}
                  required
                />
              </div>
            </div>
          </>
        )}
        {userType === "company" && (
          <>
            {commonFields}
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="company_name" className="form-label">
                  Company Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="company_name"
                  name="company_name"
                  onChange={handleChange}
                  value={formData.company_name || ""}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="companyreg_no" className="form-label">
                  Registration Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="companyreg_no"
                  name="companyreg_no"
                  onChange={handleChange}
                  value={formData.companyreg_no || ""}
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-12">
                <label htmlFor="address" className="form-label">
                  Company Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  onChange={handleChange}
                  value={formData.address || ""}
                  required
                />
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg w-100" style={{ maxWidth: "800px" }}>
        <div className="card-body">
          <h2 className="text-center mb-4">Register</h2>
          <div className="d-flex justify-content-center mb-3">
            <button
              style={{
                backgroundColor: "orange",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer",
                margin: "0 10px",
              }}
              onClick={() => handleUserTypeSelect("tourist")}
            >
              Register as Tourist
            </button>
            <button
              style={{
                backgroundColor: "orange",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer",
                margin: "0 10px",
              }}
              onClick={() => handleUserTypeSelect("company")}
            >
              Register as Company
            </button>
          </div>
          {userType && (
            <form onSubmit={handleSubmit}>
              {renderForm()}
              {error && <p className="text-danger">{error}</p>}
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    backgroundColor: "orange",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                    margin: "0 10px",
                  }}
                >
                  {loading ? "Registering..." : "Register"}
                </button>
                <button
                  type="button"
                  onClick={() => handleUserTypeSelect(null)}
                  style={{
                    backgroundColor: "orange",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                    margin: "0 10px",
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
          <div className="text-center mt-4">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
