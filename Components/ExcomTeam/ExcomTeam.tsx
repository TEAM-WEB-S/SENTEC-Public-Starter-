import team03 from "../../public/Excom/EXCOM Poster Ali Asghar.png"
import team04 from "../../public/Excom/EXCOM Poster Alisbha Syed.png"
import team01 from "../../public/Excom/EXCOM Poster Ashar Khan.png"
import team02 from "../../public/Excom/EXCOM Poster Hafsa Ashfaq.png"
import team05 from "../../public/Excom/EXCOM Poster Maleeha Fatima.png"
import team06 from "../../public/Excom/EXCOM Poster Saqlain Abbas.png"
import team07 from "../../public/Excom/EXCOM Poster Zain Ul Abdeen.png"
import Image from "next/image"
import React from "react"
import { BsMicrosoftTeams } from "react-icons/bs"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaFacebookF } from "react-icons/fa"
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6"
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr"

const teamMembers = [
  {
    image: team01,
    name: "Ashar Khan",
    role: "President",
    fb: "https://www.facebook.com/profile.php?id=100011949878531&mibextid=ZbWKwL",
    insta: "https://instagram.com/asharkhan_19?igshid=MzMyNGUyNmU2YQ==",
    li: "https://www.linkedin.com/in/ashar-khan-3522bb245",
  },
  {
    image: team06,
    name: "Saqlain Abbas",
    role: "Vice President",
    fb: "https://www.facebook.com/profile.php?id=100068053542209&mibextid=ZbWKwL",
    insta: "https://instagram.com/_saqlain_abbas?igshid=OGQ5ZDc2ODk2ZA==",
    li: "https://www.linkedin.com/in/saqlain-abbas-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    image: team02,
    name: "Hafsa Ashfaq",
    role: "General Secretary",
    fb: "https://www.facebook.com/hafsa.ashfaqchippa?mibextid=ZbWKwL",
    insta: "",
    li: "https://www.linkedin.com/in/saqlain-abbas-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    image: team04,
    name: "Alishba Seyed",
    role: "Manager Operation",
    fb: "https://www.facebook.com/alisha.cyed?mibextid=ZbWKwL",
    insta:
      "https://www.instagram.com/invites/contact/?i=md2culxp8gew&utm_content=mo5g937",
    li: "https://www.linkedin.com/in/alishba-syed-23277323b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    image: team03,
    name: "Ali Asghar",
    role: "Manager Finance",
    fb: "https://www.facebook.com/aliasgharmuntaziri?mibextid=ZbWKwL",
    insta:
      "https://www.instagram.com/ali.asghar_muntaziri?igsh=dDkzN2hleG5pNDZz",
    li: "",
  },
  {
    image: team07,
    name: "Zain Ul Abdeen",
    role: "Advisor Technical",
    fb: "https://www.facebook.com/profile.php?id=100051418666639&mibextid=ZbWKwL",
    insta: "https://instagram.com/zainulabdeen1267?igshid=OGQ5ZDc2ODk2ZA==",
    li: "https://www.linkedin.com/in/zain-ul-abdeen-b11701244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    image: team05,
    name: "Maleeha Fatima",
    role: "Advisor Media And Growth",
    fb: "https://www.facebook.com/maleeha.fatima.963?mibextid=ZbWKwL",
    insta: "",
    li: "https://www.linkedin.com/in/maleehafatima20",
  },
]

const NextArrow = (props) => {
  const { onClick } = props

  return (
    <div className="access-slider next-one">
      <button className="next" onClick={onClick}>
        <GrFormNextLink color="white" />
      </button>
    </div>
  )
}

const PrevArrow = (props) => {
  const { onClick } = props

  return (
    <div className="access-slider prev-one">
      <button className="prev" onClick={onClick}>
        <GrFormPreviousLink color="white" />
      </button>
    </div>
  )
}

const settings = {
  className: "center",
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  centerPadding: "20px",
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

function ExcomTeam() {
  return (
    <div className="conatiner team-container ">
      <div data-aos="fade-up" data-aos-duration="800" className="comman-head">
        <p className="sub-tittle-comman">
          <BsMicrosoftTeams />
          <span>Team</span>
        </p>
        <h3 className="titlle-coman">
          Meet With Our <span>Excom Commitee</span>
        </h3>
        <p className='max-w-[800px] mx-auto my-1 text-gray-600' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aliquam totam optio odio exercitationem voluptatem adipisci illo, fuga distinctio laborum!</p>
      </div>
      <div className="team-sub-container !mt-[30px]">
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
              fb={member.fb}
              insta={member.insta}
              li={member.li}
            />
          ))}
        </Slider>
      </div>
    </div>
  )
}

function TeamMember({ image, name, role, fb, insta, li }) {
  return (
    <div className="each-team" data-aos="fade-up" data-aos-duration="800">
      <div className="each-image-container">
        <ul>
          {insta && (
            <li>
              <a href={`${insta}`} target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </li>
          )}
          {fb && (
            <li>
              <a href={`${fb}`} target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
            </li>
          )}
          {li && (
            <li>
              <a href={`${li}`} target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
            </li>
          )}
        </ul>
        <Image src={image} alt="team01" />
      </div>
      <div className="team-details">
        <h1>{name}</h1>
        <h4>{role}</h4>
      </div>
    </div>
  )
}

export default ExcomTeam
