import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Menu = (props: Props) => {
  return (
    <div className='flex justify-between my-container items-center  py-6'>
      <div className=''>
        <a href={'/'} className='flex  gap-1  justify-center'>
          <div>
            <Image
              src={'/img/coffee.png'}
              alt=''
              width={40}
              height={40}
            />
          </div>
          <div>
            <div className='font-bold text-3xl text-logo'>CoffeeBreak</div>
            <div className='text-2xl font-semibold text-[#A88C6A] relative -top-3'>loans<span className='text-gray font-medium text-xl text-[#D7D7D7]'>.com</span></div>
          </div>
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