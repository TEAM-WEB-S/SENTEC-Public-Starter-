import { cn } from "@/lib/utils"
import Bananer from "@/Components/Banner/Banner";
import TopBar from "@/Components/TopBar/TopBar";
import NavBar from "@/Components/NavBar/NavBar";
import Members from "@/Components/Members/Members";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Bananer />
      <Members />
    </div>
  )
}
