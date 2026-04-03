import toast from "react-hot-toast";


import { useForm } from "react-hook-form";
import InputField from "../ui/InputField";
import { loginValidation  } from "../../validations/authValidation";
import { loginUser } from "../../services/authService";
import {  useNavigate } from "react-router-dom";

const Login = ({ show }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
   
  const navigate = useNavigate();

 const onSubmit = async (data) => {
  try {
    const res = await loginUser(data);

    if (res.status === 200) {
      toast.success("Logged In successfully!", {
        duration: 2000,
      });

      navigate("/dashboard", { replace: true });
    }

  } catch (err) {
    const message =
      err.response?.data?.message || err.message;

    toast.error(message, {
      duration: 2000,
    });
  }
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
  {...register("email", loginValidation.email)}
/>

{errors.email && (
  <div className="mt-1 mb-2">
    <p className="text-red-500 text-sm font-medium">
       {`* ${errors.email.message}` || "* Email is required"}
    </p>
  </div>
)}

<InputField
  label="Password"
  type="password"
  placeholder="Enter your password"
  iconName="RiLockFill"
  {...register("password", { required: "Password is required" })}
/>

{errors.password && (
  <div className="mb-2">
    <p className="text-red-500 text-sm font-medium">
      {"* Password is required"}
    </p>
  </div>
)}

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
        Login
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
