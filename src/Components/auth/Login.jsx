import { useForm } from "react-hook-form";
import InputField from "../ui/InputField";

const Login = ({ show }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="flex justify-center w-full mt-30  bg-[#f4f2ee] px-4 md:px-8">
      <div
        className="
        bg-white 
        p-6 sm:p-8 
        rounded-2xl 
        shadow-md 
        w-full 
        max-w-[420px]
      "
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-1 text-center">
          Welcome to PolluTrack
        </h2>

        <p className="text-gray-600 mb-4 text-center text-sm sm:text-base">
          Sign in to access industrial pollution data
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
            iconName="RiMailFill"
            {...register("email", { required: true })}
          />

          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
            iconName="RiLockFill"
            {...register("password", { required: true })}
          />

          <p className="text-right text-green-700 text-sm cursor-pointer mb-3">
            Forgot password?
          </p>

          <button
            type="submit"
            className="
              w-full 
              bg-green-700 
              text-white 
              py-2 
              rounded-lg 
              hover:bg-green-800 
              transition
            "
          >
            Sign In
          </button>

          <p className="mt-3 text-center text-sm">
            Don’t have an account?{" "}
            <span
              className="text-green-700 cursor-pointer font-medium"
              onClick={() => show(false)}
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
