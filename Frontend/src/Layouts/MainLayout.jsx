import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function MainLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Outlet />   
    </div>
  );
}
