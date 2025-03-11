import React, { useState } from 'react'
import Hero from './hero/Hero';
import Content from './content/Content';

function Index() {
    
    // const [showContent, setShowContent] = useState(0)
    // const showMainContent = () => {
    //     setShowContent(1)
    // }
    return (
      <div className="flex flex-col items-center gap-4 py-14 px-6 bg-slate-800 min-h-screen">
        <Hero />
        <Content />
      </div>
  );
}

export default Index