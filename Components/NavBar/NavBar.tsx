import logo from "../../public/logos/logo.png"
import { Menu, Send } from "lucide-react"
import Image from "next/image"
import React, { useEffect, useState } from "react"

const NavBar = () => {
  const [navStatus, setNavStatus] = useState(false)

  const transtionNavBar = () => {
    if (window.scrollY > 300) {
      setNavStatus(true)
    } else {
      setNavStatus(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transtionNavBar)

    return () => window.removeEventListener("scroll", transtionNavBar)
  }, [])

  return (
    <div
      className={`${
        navStatus
          ? "nav-top w-full border-b "
          : "w-full border-b bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4">
        <div>
          <Image src={logo} alt="senteck-logo.png" width={80} height={80} />
        </div>
        <div className="flex items-center justify-between gap-10">
          <ul className="hidden items-center justify-between gap-14 lg:flex">
            <li>
              <a href="/" className="text-gray-300 ease-in hover:text-gray-50">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-300 ease-in hover:text-gray-50">
                About
              </a>
            </li>
            <li>
              <a
                href="/Contact"
                className="text-gray-300 ease-in hover:text-gray-50"
              >
                Contact
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-300 ease-in hover:text-gray-50">
                Service
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-300 ease-in hover:text-gray-50">
                Request
              </a>
            </li>
          </ul>
          <div className="flex items-center justify-between gap-5">
            <button className="primaryBtn hidden items-center justify-center gap-3 md:flex">
              <Send color="#fff" size={18} /> <span>Get A Quote</span>
            </button>
            <Menu color="#fff" size={35} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
