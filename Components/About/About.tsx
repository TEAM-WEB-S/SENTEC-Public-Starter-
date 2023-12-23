import React, { useEffect } from 'react'
import {MdRoofing} from 'react-icons/md'
import {AiFillCheckCircle} from 'react-icons/ai'
import {IoMdCall} from 'react-icons/io'
import aboutimg01 from '../../public/About/about01.jpg'
import aboutimg02 from '../../public/About/about02.jpg'
import Logo from '../../public/logos/logo.png'
import Image from 'next/image'
import Aos from 'aos' 
import 'aos/dist/aos.css'

function About() {

  useEffect(() => {
        Aos.init({})
  },[])   


  return (
    <div className='Conatiner about' id='Whoweare'>
        <Image src={Logo} className='about-tranotion-image' alt='logo-img' />
        <div className='inner-container inner-container-about'>
            <div className='des-content'>

                <p  data-aos="fade-up" data-aos-duration="1000" className='des-tiitle'><MdRoofing />About Our society</p>
                <h2 data-aos="fade-up" data-aos-duration="1000" className='font-bold !my-1'>Who We Are</h2>
                <p  data-aos="fade-up" data-aos-duration="1000" className='des-para'>The NED University of Engineering and Technology is a renowned educational institution in Pakistan, specifically in the field of engineering. One of its student organizations is the Society for Promotion of Science, Engineering, and Technology (SENTEC), which offers students a national-level platform to improve their skills and stay updated with the latest technological advancements.
                </p>

                <div className='vission-mission'>
                    <div  data-aos="fade-right" data-aos-duration="1000" className='vission'>
                        <div className='vm-head' >
                             <AiFillCheckCircle />
                            <h3 className='my-3' >Vission</h3>
                        </div>
                        <p className='my-3' >SENTEC aims to bridge academia and industry, empowering engineering students through practical skills development and promoting exploration in engineering and technology.</p>
                    </div>
                    <div  data-aos="fade-left" data-aos-duration="1000" className='mission' >
                        <div className='vm-head' >
                            <AiFillCheckCircle />
                            <h3 className='my-3' >Mission</h3>
                        </div>
                        <p className='my-3' >SENTEC bridges academia and industry for engineering students. Through events, workshops, and robotics promotion, we equip students with practical skills and inspire exploration of engineering and technology.</p>
                    </div>
                </div>

                <button  data-aos="fade-up" data-aos-duration="1000" className='button about-btn'><a href="https://wa.me/+923343423613"><IoMdCall /><span>Contact Us</span></a></button>

            </div>
            <div className='image-cont'>
                <div className='image-container' >
                    <Image  data-aos="fade-right" data-aos-duration="1000" className='aboutimg01' src={aboutimg01} alt='aboutimg01' />
                    <Image  data-aos="fade-left" data-aos-duration="1000" className='aboutimg02' src={aboutimg02} alt='aboutimg02' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About