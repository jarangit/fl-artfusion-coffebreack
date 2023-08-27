import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Menu = (props: Props) => {
  return (
    <div className='flex justify-between my-container items-center  py-6'>
      <div>
        <a href={'/'}>
          <Image
            src={'/img/logo.png'}
            alt=''
            width={200}
            height={200}
          />
        </a>
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