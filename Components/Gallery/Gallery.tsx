"use client"
import React, { useState } from 'react'

import techtalk01 from '../../public/Gallery/TechTalk/Techtalk3.13.jpg'
import techtalk02 from '../../public/Gallery/TechTalk/Techtalk3.20.jpg'
import techtalk03 from '../../public/Gallery/TechTalk/Techtalk3.38.jpg'
import techtalk04 from '../../public/Gallery/TechTalk/Techtalk3.44.jpg'
import techtalk05 from '../../public/Gallery/TechTalk/Techtalk3.50.jpg'
import techtalk06 from '../../public/Gallery/TechTalk/Techtalk4.2.jpg'
import techtalk07 from '../../public/Gallery/TechTalk/TechtalkP1.1.jpg'
import techtalk08 from '../../public/Gallery/TechTalk/TechtalkP1.1.jpg'
import techtalk09 from '../../public/Gallery/TechTalk/TechtalkP1.3.jpg'
import techtalk10 from '../../public/Gallery/TechTalk/TechtalkP1.4.jpg'
import techtalk11 from '../../public/Gallery/TechTalk/TechtalkP1.5.jpg'
import techtalk12 from '../../public/Gallery/TechTalk/TechtalkP2.1.jpg'
import Image from 'next/image'

const TechTalkPhotos = [
    techtalk01,
    techtalk02,
    techtalk03,
    techtalk04,
    techtalk05,
    techtalk06,
    techtalk07,
    techtalk08,
    techtalk09,
    techtalk07,
    techtalk09,
    techtalk10,
    techtalk11,
    techtalk12,
]

const sentechGallary = [
    {
        name : 'Tehc Talk',
        images :TechTalkPhotos
    },
    {
        name : 'Olymbiad',
        images : []
    },
]

const Gallery = () => {
  const [selected , setSelected] = useState(sentechGallary[0])  

  const handleGallery = (obj) => {
    setSelected(obj)
    console.log(obj);
  }

  return (
    <div className='w-[95%] mx-auto  team-container'  >
    <div data-aos="fade-up" data-aos-duration="800" className='comman-head' >
        {/* <p  className='sub-tittle-comman' ><BsMicrosoftTeams /><span>Team</span></p> */}
        <h3 className='titlle-coman' >SENTEC <span>Gallery</span></h3>
        <p className='max-w-[800px] mx-auto my-1 text-gray-600' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aliquam totam optio odio exercitationem voluptatem adipisci illo, fuga distinctio laborum!</p>
    </div>
    <div className='max-w-[1280px] mx-auto  w-[95%] !my-[40px]' >
        <div className='flex justify-start gap-[20px] items-center' >
            {
                sentechGallary.map((btn) => (
                    <button onClick={() => handleGallery(btn)} className={`primaryBtn secondaryBtn ${selected.name == btn.name && 'active'}`} >{btn.name}</button>
                ))
            }
        </div>
        <div className='image-gallery-sentec' >
            {
                selected.images.map((img , index) => (
                   <div className='each-gallery-image'  data-aos="fade-up" data-aos-duration="800" key={index} >
                       <Image  src={img} className='galley-images' />
                   </div>
                ))  
            }
        </div>
    </div>
</div>
  )
}

export default Gallery