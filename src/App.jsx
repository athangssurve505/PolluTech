import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Auth from "./Pages/Auth";
import Dashboard from "./Pages/Dashboard";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <Routes>

      {/* Routes WITH Navbar */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
         {/* Route WITHOUT Navbar */}
      <Route path="/auth" element={<Auth />} />
      </Route>

     

    </Routes>
  );
}

export default App;
