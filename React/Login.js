import React, { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import Safar_ForgetPass from "./Safar_ForgetPass"; // Import Forgot Password component
import Safar_SignUp from "./Register"; // Import Sign Up component

var localhost = "http://localhost:8080";

export default function Safar_login() {
  const [msg, setMsg] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const init = {
    username: "",
    password: "",
    roleid: 1,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update": {
        return {
          ...state,
          [action.field]: action.value,
        };
      }
      case "setRole": {
        return {
          ...state,
          roleid: action.value,
        };
      }
      default:
        return state;
    }
  };

  const [info, dispatch] = useReducer(reducer, init);

  const inUsername = (e) => {
    dispatch({ type: "update", field: "username", value: e.target.value });
  };

  const inPassword = (e) => {
    dispatch({ type: "update", field: "password", value: e.target.value });
  };

  const setRole = (e) => {
    dispatch({ type: "setRole", value: e.target.value });
  };

  const onLogin = (e) => {
    e.preventDefault();
    const getData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: info.username,
        password: info.password,
        roleid: info.roleid,
      }),
    };
    fetch(localhost + "/login", getData)
      .then((resp) => {
        if (!resp.ok) {
          return resp.text();
        }
        alert("Login Successfully");
        return resp.text();
      })
      .then((data) => setMsg(data))
      .catch((err) => setMsg(err.toString()));
  };

  return (
    <div
      className="login-container p-5 rounded shadow-lg"
      style={{
        maxWidth: "400px",
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
      }}
    >
      <center>
        <h2 className="mb-4" style={{ color: "orange" }}>Welcome</h2>
      </center>
      <form onSubmit={onLogin}>
        <div className="form-group mb-3">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            value={info.username}
            onChange={inUsername}
            placeholder="Enter your username"
            required
            className="form-control"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            value={info.password}
            onChange={inPassword}
            placeholder="Enter your password"
            required
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: "orange", color: "white" }}>
          Login
        </button>
        <div className="mt-3 text-center">
          <a
            href="forgotpassword"
            onClick={(e) => {
              e.preventDefault();
              setShowForgotPassword(true);  // Show the Forgot Password modal
            }}
            className="text-decoration-none" style={{ color: "green" }}
          >
            Forgot Password
          </a>
          <br />
          <br />
          Don't have an account?{" "}
          <a
            href="register"
            onClick={(e) => {
              e.preventDefault();
              setShowSignUp(true);  // Show the Sign Up modal
            }}
            className="text-decoration-none" style={{ color: "green" }}
          >
            Sign Up
          </a>
        </div>
        <div className="mt-3">
          <center>
            <p className="message" style={{ color: "red" }}>{msg}</p>
          </center>
        </div>
      </form>

      {/* Modal for Forgot Password */}
      {showForgotPassword && (
        <div
          style={modalStyles.overlay}
          onClick={() => setShowForgotPassword(false)}  // Close on overlay click
        >
          <div style={modalStyles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              style={modalStyles.closeButton}
              onClick={() => setShowForgotPassword(false)}  // Close the modal
            >
              &times;
            </button>
            <Safar_ForgetPass closeModal={() => setShowForgotPassword(false)} />
          </div>
        </div>
      )}

      {/* Modal for Sign Up */}
      {showSignUp && (
        <div
          style={modalStyles.overlay}
          onClick={() => setShowSignUp(false)}  // Close on overlay click
        >
          <div style={modalStyles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              style={modalStyles.closeButton}
              onClick={() => setShowSignUp(false)}  // Close the modal
            >
              &times;
            </button>
            <Safar_SignUp closeModal={() => setShowSignUp(false)} />
          </div>
        </div>
      )}

    </div>
  );
}

const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "white",
    padding: "40px",  // Increased padding for more space
    borderRadius: "10px",
    width: "600px",  // Increased modal width
    maxWidth: "100%",
    maxHeight: "80vh", // Kept the same for vertical responsiveness
    overflowY: "auto", // Enable scrolling for long content
    position: "relative", // To position close button absolutely
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "transparent",
    border: "none",
    fontSize: "30px",
    color: "#aaa",
    cursor: "pointer",
    transition: "color 0.3s",
  },
};
