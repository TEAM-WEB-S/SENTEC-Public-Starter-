import React from 'react'
import {BsMicrosoftTeams} from 'react-icons/bs'
import team01 from '../../public/Domains/TEAM WEB DEVELOPMENT.png'
import team02 from '../../public/Domains/TEAM DOCUMENTATION.png'
import team03 from '../../public/Domains/TEAM EVENT MANAGEMENT.png'
import team04 from '../../public/Domains/TEAM GRAPHICS AND CREATIVITY.png'
import team05 from '../../public/Domains/TEAM HUMAN RESOURCES.png'
import team06 from '../../public/Domains/TEAM MARKETING.png'
import team07 from '../../public/Domains/TEAM PHOTOGRAPHY.png'
import team08 from '../../public/Domains/TEAM PROMOTION.png'
import team09 from '../../public/Domains/TEAM RESEARCH AND DEVELOPMENT.png'
import team10 from '../../public/Domains/TEAM ROBOTICS AND IT.png'
import team11 from '../../public/Domains/TEAM SOCIAL MEDIA.png'
import Image from 'next/image'
import { FaLinkedinIn , FaInstagram  } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";


function Domain() {
  return (
    <div className='conatiner team-container '  >
        <div data-aos="fade-up" data-aos-duration="800" className='comman-head' >
            {/* <p  className='sub-tittle-comman' ><BsMicrosoftTeams /><span>Team</span></p> */}
            <h3 className='titlle-coman' >Our <span>Domains</span></h3>
        </div>
        <div className='team-sub-container domain-sub-container !mt-[30px]' >
                <Team  image={team01} desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." />
                <Team  image={team02} desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." />
                <Team  image={team03} desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." />
                <Team  image={team04} desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." />
                <Team  image={team05} desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." />
                <Team  image={team06} desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." />
                <Team  image={team07} desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." />
                <Team  image={team08} desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." />
                <Team  image={team09} desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." />
                <Team  image={team10} desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." />
                <Team  image={team11} desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." />
        </div>
    </div>
  )
}

function Team({image , desc}){
    return(
        <div className='each-domain' data-aos="fade-up" data-aos-duration="800" >
            <div className='each-image-container' >
                <Image src={image} alt='team01' /> 
            </div>
            <div className='team-details' >
                    <p>{desc}</p>
            </div>
        </div>
    )
}

export default Domain