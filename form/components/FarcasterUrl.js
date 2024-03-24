import React from 'react'
import Clipboard from '@/components/Clipboard.js'

import { useEffect, useState } from 'react'

const Url_prefix = "https://framework-u5cy.vercel.app/api/generate-main?page=chart&contractAddress="


function FarcasterUrl({inputValue}) {

  console.log(inputValue, "inputValue")

  const completeUrl = Url_prefix + inputValue.toLowerCase();

  console.log(completeUrl, "completeUrl")





  return (
    <div className='flex flex-col items-center mt-1'>

    <div className='text-xl font-bold mt-12 mb-5'>
      Frame Url
    </div>

    <div className="text-black">
        <Clipboard text={completeUrl} />
     </div>
    </div>
  )
}

export default FarcasterUrl
