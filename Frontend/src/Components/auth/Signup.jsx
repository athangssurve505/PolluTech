import toast from "react-hot-toast";

import { useForm } from "react-hook-form";
import InputField from "../ui/InputField";
import { signupValidation } from "../../validations/authValidation";
import { signupUser } from "../../services/authService";
import {  useNavigate } from "react-router-dom";

const Signup = ({ show }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const password = watch("password");
  const navigate = useNavigate();

   const onSubmit = async (data) => {
    try {
      const res = await signupUser(data);

      if (res.status === 201 || res.status === 200) {

      toast.success("Account created successfully!",{
        duration:2000
      });

      navigate("/dashboard",{replace:true});
}
    } catch (err) {
      toast.error(err.response?.data || err.message,{
        duration:2000
      });
    }
  };

  return (
    <div className="flex  justify-center w-full mt-30 bg-[#f4f2ee] px-4 md:px-8">
      <div className="
        bg-white 
        p-6 sm:p-8 
        rounded-2xl 
        shadow-md 
        w-full 
        max-w-[420px]
      ">
        <h2 className="text-xl sm:text-2xl font-bold mb-1 text-center">
          Create your account
        </h2>

        <p className="text-gray-600 mb-4 text-center text-sm sm:text-base">
          Join PolluTrack to access industrial pollution data
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            iconName="RiUserLine"
            {...register("name",signupValidation.name)}
          />
          {errors.name && (
        <p className="text-red-500 text-sm font-medium">
         {`*${errors.name.message}`}
          </p>
)}

          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
            iconName="RiMailFill"
            {...register("email",signupValidation.email )}
          />
                {errors.email && (
         <p className="text-red-500 text-sm font-medium">
    {`* ${errors.email.message}`}
  </p>
  )}

          <InputField
            label="Password"
            type="password"
            placeholder="Create a password"
            iconName="RiLockFill"
            {...register("password",signupValidation.password)}
          />
          {errors.password && (
         <p className="text-red-500 text-sm font-medium">
    {`* ${errors.password.message}`}
  </p>
  )}


          <InputField
            label="Confirm Password"
            type="password"
            placeholder="Re-enter your password"
            iconName="RiLockFill"
             {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                value === password || "Passwords do not match",
              })}
          />
           {errors.confirmPassword && (
            <p className="text-red-500 font-medium text-sm">
          {`* ${errors.confirmPassword.message}`}
          </p>
            )}

          <button
            type="submit"
            className="
              w-full 
              bg-green-700 
              text-white 
              py-2 
              rounded-lg 
              mt-3 
              hover:bg-green-800 
              transition
            "
          >
            Create Account
          </button>

          <p className="mt-3 text-center text-sm">
            Already have an account?{" "}
            <span
              className="text-green-700 cursor-pointer font-medium"
              onClick={() => show(true)}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
