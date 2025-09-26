function InputField({ type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded-lg p-3 mb-3 
                 focus:outline-none focus:ring-2 focus:ring-indigo-500 
                 transition duration-200"
    />
  );
}

export default InputField;
