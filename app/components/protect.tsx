import Image from 'next/image'
import React from 'react'

type Props = {}
const mockData = [
  {
    image: '/img/approve.png',
    title: 'Accurate. Transparent. Risk-Free',
    content: 'No tricks or hidden charges—just real, accurate rates from reputable lenders.',
  },
  {
    image: '/img/star.png',
    title: 'Reliable',
    content: 'CoffeeBreakLoans.com prides itself on its transparency and reliability.',
  },
  {
    image: '/img/lock.png',
    title: 'Safe and Secure',
    content: 'It’s spam, scam, and risk-free. Your information is securely encrypted to avoid unauthorized access.',
  },
]
const Protect = (props: Props) => {
  return (
    <div className='bg-brow text-white py-16'>
      <div className='grid col-span-1 lg:grid-cols-3 gap-10  my-container text-center'>
        {mockData.map((item, key) => (
          <div key={key} className='flex flex-col gap-1 justify-center items-center'>
            <div className='mb-3'>
              <Image
                src={item.image}
                alt=''
                width={100}
                height={100}
              />
            </div>
            <strong className='text-xl'>{item.title}</strong>
            <div className='text-sm'>{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Protect