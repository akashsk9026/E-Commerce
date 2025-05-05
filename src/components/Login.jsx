import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";


const Login = () => {
  const [state, setState] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");

  const handleBlur = (field) => {
    if (field === "email" && email === "") {
      setEmailError("Email is required.");
    } else {
      setEmailError("");
    }

    if (field === "password" && password === "") {
      setPasswordError("Password is required.");
    } else {
      setPasswordError("");
    }

    if (field === "name" && state === "register" && name === "") {
      setNameError("Name is required.");
    } else {
      setNameError("");
    }
  };

  return (
    <div className="bg-white rounded-xl p-8 w-[380px] shadow-2xl relative transition-all duration-300 ease-in-out">
      <h2 className="text-3xl font-bold text-center mb-6">
        <span className="text-green-500">User</span>{" "}
        <span className="text-gray-700">
          {state === "login" ? "Login" : "Sign Up"}
        </span>
      </h2>

      {/* Name input for registration */}
      {state === "register" && (
        <div className="mb-4">
          <label className="text-sm text-gray-600">Name</label>
          <div className="flex items-center gap-2 border p-2 rounded-md focus-within:border-green-500">
            <FaUser className="text-gray-400" />
            <input
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => handleBlur("name")}
              className="w-full outline-none text-sm"
            />
          </div>
          {nameError && <p className="text-xs text-red-500">{nameError}</p>}
        </div>
      )}

      {/* Email Input */}
      <div className="mb-4">
        <label className="text-sm text-gray-600">Email</label>
        <div className="flex items-center gap-2 border p-2 rounded-md focus-within:border-green-500">
          <FaEnvelope className="text-gray-400" />
          <input
            type="email"
            placeholder="example@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => handleBlur("email")}
            className="w-full outline-none text-sm"
          />
        </div>
        {emailError && <p className="text-xs text-red-500">{emailError}</p>}
      </div>

      {/* Password Input */}
      <div className="mb-4">
        <label className="text-sm text-gray-600">Password</label>
        <div className="flex items-center gap-2 border p-2 rounded-md focus-within:border-green-500">
          <FaLock className="text-gray-400" />
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => handleBlur("password")}
            className="w-full outline-none text-sm"
          />
        </div>
        {passwordError && <p className="text-xs text-red-500">{passwordError}</p>}
      </div>

      {/* Toggle between Login/Register */}
      <p className="text-sm text-gray-500 mb-4 text-center">
        {state === "login" ? "Don't have an account?" : "Already a user?"}{" "}
        <span
          onClick={() => setState(state === "login" ? "register" : "login")}
          className="text-green-500 font-semibold cursor-pointer hover:underline"
        >
          {state === "login" ? "Sign up" : "Login"}
        </span>
      </p>

      <button
        className="w-full bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-md text-sm font-semibold transition-all duration-200"
      >
        {state === "login" ? "Login" : "Create Account"}
      </button>
    </div>
  );
};

export default Login;
