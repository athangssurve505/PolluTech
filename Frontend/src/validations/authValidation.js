export const loginValidation = {
  email: {
    required: "Email is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Invalid email format",
    },
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Minimum 8 characters required",
    },
  },
};

export const signupValidation = {
  name: {
    required: "Name is required",
  },
  email: loginValidation.email,
  password: loginValidation.password,
  name: {
    required: "Full name is required",
    pattern: {
      value: /^[A-Za-z\s]+$/,
      message: "Name should not contain numbers or special characters",
    },
  },
};