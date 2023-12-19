import React from 'react'

export const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>{`LET'S BUILD SOMETHING TOGETHER`}</p>
                <h1>{`Hi, I'm`}<span className='text-[#22AAA1]'> Rob</span></h1>
            </div>
        </div>
    </div>
  )
}
