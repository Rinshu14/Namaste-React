import React from 'react'

const VideoCardShimmer = () => {
  return (
  
    <div className=' w-[15rem]  mt-4  ml-6  shadow-sm rounded-md block bg-white' >
    <div className=' w-[90%] h-28  mt-2  mx-auto bg-slate-300 rounded-lg animate-pulse' ></div>
    <p className='mt-2 h-4 bg-slate-300 w-1/2 mx-8 animate-pulse ' ></p>
    <p className='my-2 h-4 bg-slate-300 w-1/3  mx-8 animate-pulse ' ></p>
    <p className='my-2 h-4 bg-slate-300 w-1/3  mx-8 animate-pulse ' ></p>
</div>
  )
}

export default VideoCardShimmer