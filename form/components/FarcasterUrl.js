import React from 'react'
import Clipboard from '@/components/Clipboard.js'


function FarcasterUrl() {
  return (
    <div className='flex flex-col items-center mt-36'>
    <div className='text-xl font-bold'>
      _______________________________________
    </div>

    <div className='text-xl font-bold mt-12 mb-5'>
      Frame Url
    </div>

    <div className="text-black">
        <Clipboard text="123" />
     </div>
    </div>
  )
}

export default FarcasterUrl
