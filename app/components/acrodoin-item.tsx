"use client"; // This is a client component 👈🏽

import React, { useState } from 'react'
import { BiMinusCircle, BiPlusCircle } from 'react-icons/bi'
type Props = {
  data: any;
  firstActive?: boolean;
}

const AccordionItem = ({ data, firstActive }: Props) => {
  const [open, setOpen] = useState(firstActive)
  return (
    <div className={`border p-6 rounded-md shadow-md cursor-pointer ${open ? 'bg-brow text-white' : ""}`} onClick={() => setOpen(!open)}>
      <div className='flex justify-between'>
        <div className='font-semibold'>{data.title}</div>
        <div className=''>
          {open ? (
            <BiMinusCircle size={25} />
          ) :
            <BiPlusCircle size={25} />}
        </div>
      </div>
      <div className={`${open ? 'max-h-[500px]' : 'max-h-6'} overflow-hidden transition-all duration-300`} dangerouslySetInnerHTML={{ __html: data.content }} ></div>
    </div>
  )
}

export default AccordionItem