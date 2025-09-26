import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import Button from "../components/Button";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 text-white px-4">
      <FaReact className="text-7xl mb-6 animate-spin-slow" />
      <h1 className="text-5xl font-extrabold mb-2 drop-shadow-lg">
        React Auth Routing
      </h1>
      <p className="text-lg mb-8 text-center max-w-lg">
        A modern secure React app with authentication, login protection, and
        private routes — built with Vite, Tailwind, Axios, and React Router.
      </p>
      <Link to="/login" className="w-full max-w-xs">
        <Button text="Get Started" color="white" />
      </Link>
    </div>
  );
}

export default Home;
