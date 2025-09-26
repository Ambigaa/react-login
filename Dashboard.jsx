import { useNavigate } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";
import Button from "../components/Button";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 px-4">
      <FaUserShield className="text-green-600 text-7xl mb-6" />
      <h1 className="text-4xl font-bold mb-2 text-gray-800">
        Welcome to Dashboard 🚀
      </h1>
      <p className="mb-6 text-gray-600 text-lg">
        You are logged in successfully.
      </p>
      <div className="w-full max-w-xs">
        <Button text="Logout" onClick={handleLogout} color="red" />
      </div>
    </div>
  );
}

export default Dashboard;
