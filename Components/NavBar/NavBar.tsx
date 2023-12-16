import React , {useEffect , useState} from 'react'
import logo from '../../public/logos/logo.png'
import {Menu , Send} from 'lucide-react'
import Image from 'next/image'

const NavBar = () => {
  const [navStatus , setNavStatus] = useState(false)

  const transtionNavBar = () => {
    if(window.scrollY > 300) {
      setNavStatus(true)
    }else{
      setNavStatus(false)
    }
  }  

  useEffect(() => {
    window.addEventListener("scroll" , transtionNavBar)
    
    return () => window.removeEventListener("scroll" , transtionNavBar)
  }, []) 

  return (
    <div className={`${navStatus ? 'w-full border-b nav-top ' : 'w-full border-b bg-transparent'}`} >
        <div className='container-custom py-4 flex justify-between items-center' >
            <div>
                <Image src={logo} alt="senteck-logo.png" width={80} height={80} />
            </div>
            <div className='flex justify-between items-center gap-10' >
                <ul className='hidden justify-between items-center gap-14 lg:flex' >
                    <li><a href='/' className='text-gray-300 hover:text-gray-50 ease-in' >Home</a></li>
                    <li><a href='/' className='text-gray-300 hover:text-gray-50 ease-in' >About</a></li>
                    <li><a href='/' className='text-gray-300 hover:text-gray-50 ease-in' >Contact</a></li>
                    <li><a href='/' className='text-gray-300 hover:text-gray-50 ease-in' >Service</a></li>
                    <li><a href='/' className='text-gray-300 hover:text-gray-50 ease-in' >Request</a></li>
                </ul>
                <div className='flex justify-between items-center gap-5' >
                    <button className='primaryBtn hidden justify-center gap-3 items-center md:flex' ><Send color="#fff" size={18} /> <span>Get A Quote</span></button>
                     <Menu color="#fff" size={35} className='cursor-pointer' />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default NavBar