import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaLock } from "react-icons/fa";
import InputField from "../components/InputField";
import Button from "../components/Button";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      // Simulated API (replace with backend later)
      await new Promise((res) => setTimeout(res, 1000));

      if (username === "admin" && password === "1234") {
        localStorage.setItem("authToken", "dummy_token");
        navigate("/dashboard");
      } else {
        setError("Invalid username or password ❌");
      }
    } catch (err) {
      setError("Something went wrong, try again later!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition hover:scale-105">
        <div className="flex items-center justify-center mb-6">
          <FaLock className="text-indigo-600 text-5xl" />
        </div>
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Secure Login
        </h2>

        <InputField
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-red-500 text-center mb-3 font-medium">{error}</p>
        )}

        <Button
          text={loading ? "Logging in..." : "Login"}
          onClick={handleLogin}
          color="indigo"
        />
      </div>
    </div>
  );
}

export default Login;
