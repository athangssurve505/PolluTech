import { useState } from "react";
import Icon from "./Icon";

const InputField = ({
  label,
  type = "text",
  placeholder,
  iconName,
  ...rhf // rest operator for React Hook Form props
}) => {
  const isPassword = type === "password";
  const [showPassword, setShowPassword] = useState(false);

  // decide actual input type dynamically
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className="mb-4">
      <label className="block mb-1.5 font-medium text-gray-700">
        {label}
      </label>

      <div
        className="flex items-center border rounded-lg px-3 py-2 bg-white 
        focus-within:ring-2 focus-within:ring-green-600 transition"
      >
        {iconName && (
          <Icon name={iconName} className="w-4 h-4 mr-2 text-gray-600" />
        )}

        <input
          type={inputType}
          placeholder={placeholder}
          className="w-full outline-none border-none bg-transparent text-sm text-gray-800 placeholder-gray-400"
          {...rhf}
        />

        {/* Password toggle button only when type is password */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="ml-2 text-gray-600 hover:text-green-700"
          >
            <Icon name={showPassword ? "eye-off" : "eye"} className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
