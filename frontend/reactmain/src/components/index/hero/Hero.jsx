import React, { useState } from 'react'



function Hero() {
    const [showContent, setShowContent] = useState("block")
    const showMainContent = () => {
        setShowContent("hidden")
    }
  return (
    <div className=''> 
        <h1 className='doto text-7xl font-medium text-blue-600'>
          TaleCraft
        </h1>
        <h2 className='mt-3 nautigal text-4xl font-medium'>
            "AI-powered storytelling, crafted with myth and mind."
        </h2>
         
        <button onClick={showMainContent} className={`${showContent} mt-4 mx-auto hover:scale-y-105 transition-all duration-75 delay-100`}>
            Start now  <span>&#8594;</span>
        </button>
    </div>
  )
}

export default Hero