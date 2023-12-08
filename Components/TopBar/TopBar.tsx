import React from 'react'
import {MapPin , PhoneCall , Mail} from 'lucide-react'

const TopBar = () => {
  return (
    <div className='bg-white w-full py-3 hidden md:block' >
        <div className='container-custom flex justify-between items-center' >
            <div className='flex justify-start items-center gap-4' >
                <div className='flex justify-start items-center gap-2' >
                    <MapPin color="#f4af1b" size={18} />
                    <p className='text-[13px] text-[#0b163f]' >Rock St 14, New york City, USA</p>
                </div>
            </div>
            <div className='flex justify-start items-center gap-4' > 
                <div className='flex justify-start items-center gap-2' >
                    <PhoneCall  color="#f4af1b" size={18} />
                    <p className='text-[13px] text-[#0b163f]' >+90 15 46 47 98 487</p>
                </div>
                <div className='flex justify-start items-center gap-2' >
                    <Mail color="#f4af1b" size={18} />
                    <p className='text-[13px] text-[#0b163f]' >info@sentch</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopBar