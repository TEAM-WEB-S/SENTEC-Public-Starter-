import Bananer from "@/Components/Banner/Banner";
import TopBar from "@/Components/TopBar/TopBar";
import About from "@/Components/About/About";
import ExcomTeam from "@/Components/ExcomTeam/ExcomTeam";
import Domain from "@/Components/Domain/Domain";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Bananer />
      <About />
      <ExcomTeam />
      <Domain />
    </div>
  )
}
