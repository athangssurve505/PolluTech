import { useState } from "react";
import Login from "../Components/auth/Login";
import Signup from "../Components/auth/Signup";
import AuthRightPanel from "../Sections/AuthRightPanel";

export default function Auth() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div
      className="
      auth-wrapper 
      flex 
      flex-col lg:flex-row   /* 👈 switch row only at 1024px */
      w-full 
      bg-[#f4f2ee]
    "
    >
      {/* LEFT: Login / Signup (always visible) */}
      <div
        className="
        left 
        w-full 
        lg:w-1/2               /* 👈 split only at 1024px */
        flex 
        justify-center
        items-center
      "
      >
        {showLogin ? (
          <Login show={setShowLogin} />
        ) : (
          <Signup show={setShowLogin} />
        )}
      </div>

      {/* RIGHT: Illustration + Features (VISIBLE only from 1024px) */}
      <div
        className="
        right 
        hidden lg:flex        /* 👈 KEY LINE */
        w-full lg:w-1/2
        justify-center
        items-center
      "
      >
        <AuthRightPanel />
      </div>
    </div>
  );
}
