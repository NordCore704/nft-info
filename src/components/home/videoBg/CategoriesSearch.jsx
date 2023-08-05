import React from 'react'


const CategoriesSearch = () => {
  // This section includes a video of an NFT and some text, it is a template component for its parent
  return (
    <div className='flex gap-3 flex-col md:flex-row-reverse lg:flex-row-reverse items-center justify-center'>
        <video src="/nft-video.mp4" className='w-full h-full object-contain rounded-md' autoPlay loop></video>
        <div className="flex flex-col gap-3">
        <p className='capitalize font-semibold text-4xl text-center '>Search According To preferences and Categories</p>
        <p className='text-center'>A few little tweaks to match what you want and the results will come flying at you just as requested with the search preferences feature.</p>
        </div>
        
    </div>
  )
}

export default CategoriesSearch