import React from 'react'
import Clipboard from '@/components/Clipboard.js'

const Url_prefix = "https://framework-u5cy.vercel.app/api/generate-main?page=chart&contractAddress="


function FarcasterUrl({inputValue}) {

  const complete_url = Url_prefix + inputValue;


  return (
    <div className='flex flex-col items-center mt-1'>

    <div className='text-xl font-bold mt-12 mb-5'>
      Frame Url
    </div>

    <div className="text-black">
        <Clipboard text={complete_url} />
     </div>
    </div>
  )
}

export default FarcasterUrl
