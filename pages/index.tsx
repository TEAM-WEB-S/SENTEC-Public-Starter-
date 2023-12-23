import Bananer from "@/Components/Banner/Banner";
import TopBar from "@/Components/TopBar/TopBar";
import ExcomTeam from "@/Components/ExcomTeam/ExcomTeam";
import Domain from "@/Components/Domain/Domain";
import About from "@/Components/About/About";
import Contact from "@/Components/Contact/Contact";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Bananer />
      <About />
      <ExcomTeam />
      <Domain />
      <Contact />
    </div>
  )
}
