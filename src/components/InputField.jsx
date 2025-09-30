import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function InputField({ type, placeholder, value, onChange }) {
  const [show, setShow] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="relative w-full mb-3">
      <input
        type={isPassword && !show ? "password" : "text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          {show ? <FaEyeSlash /> : <FaEye />}
        </button>
      )}
    </div>
  );
}

export default InputField;
