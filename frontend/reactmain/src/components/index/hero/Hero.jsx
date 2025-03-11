import React, { useState } from 'react'
import Content from '../content/Content'


function Hero() {
  return (
    <div className="text-center py-16 px-4 bg-gradient-to-b from-gray-900 to-black text-white rounded-xl shadow-md">
      <h1 className="text-6xl font-bold tracking-wide font-serif drop-shadow-lg text-indigo-400">
        TaleCraft
      </h1>
      <h2 className="mt-3 text-xl font-light italic text-gray-300">
        "AI-powered storytelling, crafted with myth and mind."
      </h2>
    </div>
  );
}

export default Hero