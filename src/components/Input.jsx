import { useEffect } from "react";

const Input = ({ value = "", setInput, input }) => {
  useEffect(() => {
    setInput(value);
  }, [value]);

  return (
    <input
      type="text"
      className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      placeholder="Enter a Todo..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};

export default Input;
