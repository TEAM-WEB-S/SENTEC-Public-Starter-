import Hero from "../Components/Hero"
import Bananer from "@/Components/Banner/Banner"
import NavBar from "@/Components/NavBar/NavBar"
import TopBar from "@/Components/TopBar/TopBar"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <div>
      <TopBar />
      <Bananer />
    </div>
  )
}
