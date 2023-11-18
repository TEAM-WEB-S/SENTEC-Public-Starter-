import Image from "next/image"
import Link from "next/link"
import React from "react"

function Hero() {
  return (
    <div className="flex h-screen w-full flex-row items-center justify-between gap-20 bg-teal-500 p-8">
      <div className="m">
        <h1 className="head_text heading_gradient text-center">
          The React Framework
        </h1>

        <div className="mt-14 flex flex-row items-center justify-center gap-6">
          <Link href={"/first"}>
            <button className="flex items-center justify-center rounded-full bg-teal-100 px-10 py-3 text-center font-inter text-teal-800 transition-all hover:bg-teal-200">
              dumy
            </button>
          </Link>
          <Link href={"/second"}>
            <button className="flex items-center justify-center rounded-full bg-teal-100 px-10 py-3 text-center font-inter text-teal-800 transition-all hover:bg-teal-200">
              dumy
            </button>
          </Link>
        </div>
      </div>

      <div>
        <div className=" w-90 mr-5 mt-5 flex h-full justify-center justify-items-center">
          <Image
            width={500}
            height={100}
            alt="next"
            src={"/../image/next.jpg"}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
