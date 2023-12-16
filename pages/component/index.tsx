import React from 'react'

const page = () => {
  return (
    <div className='p-8 w-full '> 
        <div className='my-4' >
            <h3 className='my-3' >Primary Button</h3>
            <div className='flex justify-start items-center gap-4' >
                <button className='primaryBtn' >Primary Button</button>
            </div>
        </div>
        <div className='my-4' >
            <h3 className='my-3' >Secondary Button</h3>
            <div className='flex justify-start items-center gap-4' >
                <button className='primaryBtn secondaryBtn' >Secondary Button</button>
            </div>
        </div>
    </div>
  )
}

export default page