import Logo from "../Components/ui/Logo"
import NavLinks from "../Components/navbar/NavLinks"
import Button from "../Components/ui/Button"

export default function Navbar() {
  return (
    <nav className="
  px-4 py-2 w-full flex justify-between items-center 
  bg-white
  shadow-[0px_8px_20px_-8px_rgba(0,0,0,0.25)]
  border-b border-gray-200
  backdrop-blur-md
">
      <Logo showname={true} classnameDiv={"w-20 h-20 max-sm:w-12 h-12"} para={"max-sm:text-xl"}/>
      {/* <NavLinks/>
      <Button text={"Get Started"}/> */}
    </nav>
  )
}
