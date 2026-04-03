import Hero from "../Sections/Hero"
import Info from "../Sections/Info"
import Working from "../Sections/Working"
import Footer from "../Components/ui/Footer"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">

      <div className="p-3 flex flex-col">
        <Hero/>
      </div>

      <div className="p-3 flex flex-col">
        <Info/>
      </div>

      <div className="p-3 flex flex-col">
        <Working/>
      </div>

      <Footer />

    </div>
  )
}
