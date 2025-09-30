import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    setError("");
    if (!username || !password) return setError("All fields are required!");
    if (password !== confirm) return setError("Passwords do not match!");
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u) => u.username === username))
      return setError("Username already exists!");
    users.push({ username, password, role: "user" });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 px-4">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md transform transition hover:scale-105">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Register
        </h2>
        <InputField
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <Button text="Register" onClick={handleRegister} color="indigo" />
      </div>
    </div>
  );
}

export default Register;
