import Image from 'next/image'
import React from 'react'

type Props = {}

const Menu = (props: Props) => {
  return (
    <div className='flex justify-between my-container items-center  py-6'>
      <div>
        <div>
          <Image
            src={'/img/logo.png'}
            alt=''
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className='hidden gap-10 text-xl md:flex '>
        <div className='cursor-pointer hover:underline'>Loans</div>
        <div className='cursor-pointer hover:underline'>Insurance</div>
        <div className='cursor-pointer hover:underline'>Credit Cards</div>
      </div>
    </div>
  )
}

export default Menu