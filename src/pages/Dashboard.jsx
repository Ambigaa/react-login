import { useNavigate } from "react-router-dom";
import { FaUserShield, FaChartLine, FaCog } from "react-icons/fa";
import Button from "../components/Button";

function Dashboard() {
  const navigate = useNavigate();
  const role = "admin";

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-green-50 px-10 md:px-20 py-10">
      <h1 className="text-4xl font-bold mb-10 text-gray-800 text-center">
        Dashboard
      </h1>
      <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
        <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg transform transition hover:scale-105">
          <FaUserShield className="text-green-600 text-5xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            User Info
          </h2>
          <p className="text-gray-600">
            Logged in as <strong>{role}</strong>
          </p>
        </div>
        {role === "admin" && (
          <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg transform transition hover:scale-105">
            <FaChartLine className="text-blue-600 text-5xl mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              Admin Panel
            </h2>
            <p className="text-gray-600">
              Access analytics, settings, and management tools.
            </p>
          </div>
        )}
        <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg transform transition hover:scale-105">
          <FaCog className="text-purple-600 text-5xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            Settings
          </h2>
          <p className="text-gray-600">
            Manage your profile and preferences here.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-xs">
        <Button text="Logout" onClick={handleLogout} color="red" />
      </div>
    </div>
  );
}

export default Dashboard;
