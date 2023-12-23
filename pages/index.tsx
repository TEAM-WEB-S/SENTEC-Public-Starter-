import { cn } from "@/lib/utils"
import Bananer from "@/Components/Banner/Banner";
import TopBar from "@/Components/TopBar/TopBar";
import NavBar from "@/Components/NavBar/NavBar";
import ExcomTeam from "@/Components/ExcomTeam/ExcomTeam";
import Domain from "@/Components/Domain/Domain";
import About from "@/Components/About/About";

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
