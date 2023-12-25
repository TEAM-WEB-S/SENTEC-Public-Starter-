import Bananer from "@/Components/Banner/Banner";
import TopBar from "@/Components/TopBar/TopBar";
import ExcomTeam from "@/Components/ExcomTeam/ExcomTeam";
import Domain from "@/Components/Domain/Domain";
import About from "@/Components/About/About";
import Contact from "@/Components/Contact/Contact";
import Gallery from "@/Components/Gallery/Gallery";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Bananer />
      <About />
      <ExcomTeam />
      <Domain />
      <Gallery />
      <Contact />
    </div>
  )
}
