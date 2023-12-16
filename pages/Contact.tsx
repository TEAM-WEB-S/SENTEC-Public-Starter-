import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import React from "react"

;<link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" />

function Contact() {
  return (
    <div className=" mt-0 overflow-y-hidden bg-gray-100">
      <div className=" grid h-full w-full grid-cols-3 gap-1 pt-[2.9rem] ">
        {/* -------------------first-------------  */}

        <div className=" ml-[6rem] h-[40.5rem] w-[29rem] bg-white p-9">
          <h3 className="mb-6 mt-4 text-[#f4af1b]">
            <FontAwesomeIcon className="mr-2" icon={solid("star")} />
            MAKE CONNECTING
          </h3>
          <h1 className="mb-7 mt-8 w-[20rem] pb-2 text-4xl font-bold">
            Find Your Contact Information
          </h1>
          <p className="font-2xl mb-8 w-[22rem] text-gray-500">
            We understand that it is important for you access our services in a
            way time
          </p>
          <h3 className="mb-4 text-xl font-bold">
            <FontAwesomeIcon
              className="mr-3 text-xl "
              icon={solid("signs-post")}
            />
            Council Postal Address
          </h3>
          <p className="font-2xl mb-7 w-[22rem] text-gray-500">
            Level 2, 325 Reynolds Neck 2nd Street, San Antonio 78154
          </p>
          <Link href={""} className=" font-bold">
            GET DIRECTION
            <FontAwesomeIcon className="ml-2 " icon={solid("chevron-right")} />
          </Link>
          <h1 className="mt-10 text-xl font-extrabold">Social Media</h1>
          <div className="mt-3 flex gap-2 pl-0">
            <Link href={""}>
              <Image
                width={35}
                height={35}
                alt="fb.png"
                src={"/../image/facebook.png"}
              />
            </Link>

            <Link href={""}>
              <Image
                width={35}
                height={35}
                alt="fb.png"
                src={"/../image/twitter.png"}
              />
            </Link>

            <Link href={""}>
              <Image
                width={35}
                height={35}
                alt="fb.png"
                src={"/../image/gmail.png"}
              />
            </Link>

            <Link href={""}>
              <Image
                width={35}
                height={35}
                alt="fb.png"
                src={"/../image/instagram.png"}
              />
            </Link>
          </div>
        </div>

        {/* --------------middle---------------- */}

        <div className="flex items-center justify-center">
          <Image
            width={420}
            height={50}
            alt="build"
            src={"/../image/building.avif"}
          />
        </div>
        {/* ---------last----------------- */}

        <div className="h-[40.5rem] w-[29rem] bg-white">
          <div className="relative grid grid-rows-3 gap-9 border border-white p-9 text-center">
            <div className="relative border-b border-gray-200 pb-7 pt-4">
              <h3 className="mb-1 text-xl font-extrabold">Business</h3>
              <div className="absolute left-3 top-6">
                <img
                  className="h-10 w-10"
                  src="/../image/gmail.png"
                  alt="Business Image"
                />
              </div>
              <p className="font-l mb-3 text-gray-500">info@example.com</p>
              <h3 className="mb-1 text-xl font-extrabold">Residential</h3>
              <p className="font-l mb-3 text-gray-500">info@example.com</p>
            </div>

            <div className="relative border-b border-gray-200 pb-5">
              <h3 className="mb-1 text-xl font-extrabold">Phone</h3>
              <div className="absolute left-3 top-3">
                <img
                  className="h-11 w-11"
                  src="/../image/telephone.png"
                  alt="Business Image"
                />
              </div>
              <p className="font-l mb-3  text-gray-500">040404</p>
              <h3 className="mb-1 text-xl font-extrabold">Fascimile</h3>
              <p className="font-l text-gray-500">000404</p>
            </div>

            <div className="relative">
              <h3 className="mb-1 text-xl font-extrabold">Mon - Friday</h3>
              <div className="absolute left-3 top-4">
                <img
                  className="h-11 w-11"
                  src="/../image/back-in-time.png"
                  alt="Business Image"
                />
              </div>
              <p className="font-l mb-3  text-gray-500">9.00am to 6.45pm</p>
              <h3 className="mb-1 text-xl font-extrabold">Saturday</h3>
              <p className="font-l mb-3  text-gray-500">10.30am to 4.15 pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
