import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import Button from "../components/Button";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 text-white px-6">
      <FaReact className="text-8xl mb-6 animate-spin-slow drop-shadow-lg" />
      <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 text-center drop-shadow-xl">
        React Auth Routing
      </h1>
      <p className="text-lg sm:text-xl mb-10 text-center max-w-2xl leading-relaxed drop-shadow-md">
        Modern secure React app with authentication, login protection, and
        private routes.
      </p>
      <Link to="/login" className="w-full max-w-xs">
        <Button text="Get Started" color="white" />
      </Link>
      <Link to="/register" className="w-full max-w-xs mt-4">
        <Button text="Register Now" color="indigo" />
      </Link>
    </div>
  );
}

export default Home;
