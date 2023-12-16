import React, { useState  , useEffect} from "react";
import NavBar from "../NavBar/NavBar";
import { SearchCheck, PhoneForwarded } from "lucide-react";
import {motion} from 'framer-motion'

const Banner = () => {
  const [sliderNum , setSliderNum] = useState(1);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (sliderNum === 3) {
        setSliderNum(1);
      } else {
        setSliderNum(sliderNum + 1);
      }
    }, 6000);

    return () => clearTimeout(timeoutId); 
  }, [sliderNum]);

  const onTop = () => {
    if(sliderNum === 1){
        setSliderNum(3);
    }else{
        setSliderNum(sliderNum - 1)
    }
  }

  const onDown = () => {
    if(sliderNum === 3){
        setSliderNum(1);
    }else{
        setSliderNum(sliderNum + 1);
    }
  }

  return (
    <div className="banner">
      <NavBar />
      <div className="absolute top-40 md:top-56 right-6 translate-y-[0%] flex flex-row xl:flex-col gap-0 xl:gap-4 xl:top-[55%] xl:translate-y-[-50%]" >
        <svg    className="rotate-180 xl:-rotate-90 cursor-pointer"
                width="62"
                height="35"
                viewBox="0 0 62 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={onTop}
            >
                <path
                d="M61.0607 18.0607C61.6464 17.4749 61.6464 16.5251 61.0607 15.9393L51.5147 6.3934C50.9289 5.80762 49.9792 5.80762 49.3934 6.3934C48.8076 6.97919 48.8076 7.92894 49.3934 8.51472L57.8787 17L49.3934 25.4853C48.8076 26.0711 48.8076 27.0208 49.3934 27.6066C49.9792 28.1924 50.9289 28.1924 51.5147 27.6066L61.0607 18.0607ZM17.5 18.5L60 18.5L60 15.5L17.5 15.5L17.5 18.5Z"
                fill="#f4af1b"
                ></path>
        </svg>
        <svg    className="rotate-0 xl:rotate-90 cursor-pointer"
                width="62"
                height="35"
                viewBox="0 0 62 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={onDown}
            >
                <path
                d="M61.0607 18.0607C61.6464 17.4749 61.6464 16.5251 61.0607 15.9393L51.5147 6.3934C50.9289 5.80762 49.9792 5.80762 49.3934 6.3934C48.8076 6.97919 48.8076 7.92894 49.3934 8.51472L57.8787 17L49.3934 25.4853C48.8076 26.0711 48.8076 27.0208 49.3934 27.6066C49.9792 28.1924 50.9289 28.1924 51.5147 27.6066L61.0607 18.0607ZM17.5 18.5L60 18.5L60 15.5L17.5 15.5L17.5 18.5Z"
                fill="#f4af1b"
                ></path>
        </svg>
      </div>
      <div className="container-custom  top-[45%] relative translate-y-[-50%]">
        {
            sliderNum === 1 && <Slider01  caption="Explore, Discover, Create, Achieve"/>
        }
        {
            sliderNum === 2 && <Slider01  caption="Empowering Minds, Shaping Futures"/>
        }
        {
            sliderNum === 3 && <Slider01  caption="Science and Tech Unleashed"/>
        }
      </div>
    </div>
  );
};

const Slider01 = ({ caption}) => {
  return (
    <div  className="flex justify-between items-center gap-5 flex-col lg:flex-row">
      <div className="basis-[50%] flex justify-between items-start flex-col gap-6 ">
        <motion.div animate={{y:0 , opacity:1}} exit={{y:0 , opacity : 1}} initial={{y:'40px' , opacity:0 }} transition={{duration:0.5 , delay:0}}  className="flex justify-start items-center gap-2">
          <h3 className="text-3xl text-[#f4af1b] font-semibold ">
            SENTECH
          </h3>
        </motion.div>
        <motion.h1 animate={{y:0 , opacity:1}} exit={{y:0 , opacity : 1}} initial={{y:'40px' , opacity:0 }} transition={{duration:0.5 , delay : 0.5}} className="text-3xl xxsm:text-4xl md:text-6xl text-[#fff] font-bold leading-[40px] md:leading-[70px] xxsm:leading-[45px]">
          {caption}
        </motion.h1>
        <motion.p  animate={{y:0 , opacity:1}} exit={{y:0 , opacity : 1}} initial={{y:'40px' , opacity:0 }} transition={{duration:0.5 , delay : 1}} className="text-[18px] text-gray-300 font-semibold">
             SENTECH at NED University: Uniting Minds, Igniting Innovation, Advancing Science and Technology Together.
        </motion.p>
        <motion.div animate={{y:0 , opacity:1}} exit={{y:0 , opacity : 1}} initial={{y:'40px' , opacity:0 }} transition={{duration:0.5 , delay : 1.5}} className="flex justify-between items-center gap-3">
          <button className="primaryBtn flex justify-center items-center gap-2 ">
            <PhoneForwarded color="#fff" size={20} />
            <span>Contact Us</span>
          </button>
          <button className="primaryBtn  whiteBtn flex justify-center items-center gap-2">
            <SearchCheck size={20} />
            <span>Find More</span>
          </button>
        </motion.div>
      </div>
      <div  className="basis-[50%]">
        {/* <img src={sliderImg} className="object-cover w-[900px]" alt={sliderImg} /> */}
      </div>
    </div>
  );
};

export default Banner;
