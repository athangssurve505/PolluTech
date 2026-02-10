import { useForm } from "react-hook-form";
import InputField from "../ui/InputField";

const Signup = ({ show }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
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
            {...register("name", { required: true })}
          />

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
            placeholder="Create a password"
            iconName="RiLockFill"
            {...register("password", { required: true })}
          />

          <InputField
            label="Confirm Password"
            type="password"
            placeholder="Re-enter your password"
            iconName="RiLockFill"
            {...register("confirmPassword", { required: true })}
          />

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
