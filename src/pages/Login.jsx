import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import InputField from "../components/InputField";
import Button from "../components/Button";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
    if (token) {
      navigate("/dashboard", { replace: true });
    }
  }, []);

  const handleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 500));

      const users = JSON.parse(localStorage.getItem("users") || "[]");

      // Find matching user
      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        // Save auth token
        if (remember) localStorage.setItem("authToken", "dummy_token");
        else sessionStorage.setItem("authToken", "dummy_token");

        navigate("/dashboard", { replace: true }); // navigate once
      } else {
        setError("Invalid username or password ❌");
      }
    } catch (err) {
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 px-4">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md transform transition hover:scale-105">
        <div className="flex justify-center mb-6">
          <FaLock className="text-indigo-600 text-6xl" />
        </div>
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Welcome Back
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
        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center text-gray-600">
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
              className="mr-2"
            />
            Remember Me
          </label>
        </div>
        {error && (
          <p className="text-red-500 text-center mb-4 font-medium">{error}</p>
        )}
        <Button
          text={loading ? "Logging in..." : "Login"}
          onClick={handleLogin}
          color="indigo"
        />
        <p className="mt-6 text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className="text-indigo-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
