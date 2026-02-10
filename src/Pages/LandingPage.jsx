import Hero from "../Sections/Hero"
import Info from "../Sections/Info"
// import Working from "../Sections/Working"

export default function LandingPage() {
  return (
    <div className="flex flex-col">

    <div className="p-3 flex flex-col h-screen">
    <Hero/>
    </div>

     {/* <div className="p-3 flex flex-col ">
    <Info/>
    </div>

    <div className="p-3 flex flex-col ">
    <Working/>
    </div> */}
    </div>
  )
}
