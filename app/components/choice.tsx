"use client"; // This is a client component 👈🏽

import Image from 'next/image';
import React, { useState } from 'react'

type Props = {}


const Choice = (props: Props) => {
  const [activeContent, setActiveContent] = useState(1)

  const scrollToElement = (id: number) => {
    setActiveContent(id)
    const elementId = id.toString()
    const container: any = document.getElementById(elementId);
    container.scrollIntoView({ behavior: 'smooth', block: 'center', });
  };

  return (
    <div>
      <div className='my-container py-10'>
        <div className=' text-xl  lg:text-5xl font-semibold '>
          <div>The right choice</div>
          <div>to solve your</div>
          <div>needs</div>
        </div>

        <div className='grid grid-cols-2 mt-24 relative'>
          <div>
            <div className='sticky top-[50%]'>
              <ul className='flex flex-col gap-4 text-xl border-l-2 pl-4'>
                <li className={`relative cursor-pointer  ${activeContent === 1 ? "text-red font-semibold" : ""}`} onClick={() => scrollToElement(1)}>
                  <div className={`my-dot ${activeContent === 1 ? "block" : "hidden"}`}></div>
                  Loans</li>
                <li className={`relative cursor-pointer  ${activeContent === 2 ? "text-red font-semibold" : ""}`} onClick={() => scrollToElement(2)}>
                  <div className={`my-dot ${activeContent === 2 ? "block" : "hidden"}`}></div>
                  Insurance</li>
                <li className={`relative cursor-pointer  ${activeContent === 3 ? "text-red font-semibold" : ""}`} onClick={() => scrollToElement(3)}>
                  <div className={`my-dot ${activeContent === 3 ? "block" : "hidden"}`}></div>
                  Credit Cards</li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col gap-24'>
            <div id={'1'} className='flex gap-10 relative'>
              <div className={`${activeContent === 1 && 'active-icon'} absolute left-[40px] top-[20px]`}>

              </div>
              <div className='flex flex-col gap-6'>
                <div className='text-4xl font-semibold'>Loans</div>
                <div>Don’t go it alone—let CoffeeBreakLoans.com find you a top-quality lender.
                  We partner with reliable, licensed lenders providing loans explicitly tailored to your needs.</div>
                <div>
                  <ul>
                    <li >
                      <a href="/form-loan" className='flex gap-3'>
                        <div>
                          <Image
                            src={'/img/user.png'}
                            alt=''
                            width={30}
                            height={30}
                          />
                        </div>
                        <div className='text-red font-bold hover:underline'>Personal Loans</div>
                      </a>
                    </li>
                    <li >
                      <a href="/form-loan" className='flex gap-3'>
                        <div>
                          <Image
                            src={'/img/bag.png'}
                            alt=''
                            width={30}
                            height={30}
                          />
                        </div>
                        <div className='text-red font-bold hover:underline'>Business Loans</div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div id={'2'} className='flex gap-10 relative'>
              <div className={`${activeContent === 2 && 'active-icon'} absolute left-[40px] top-[20px]`}>

              </div>
              <div className='flex flex-col gap-6'>
                <div className='text-4xl font-semibold'>Insurance</div>
                <div>Don’t risk your financial wellness.

                  Choose CoffeeBreakLoans.com to protect yourself from unforeseen circumstances at affordable rates.</div>
                <div>
                  <ul>
                    <li >
                      <a href="/form-loan" className='flex gap-3'>
                        <div>
                          <Image
                            src={'/img/car.png'}
                            alt=''
                            width={30}
                            height={30}
                          />
                        </div>
                        <div className='text-red font-bold hover:underline'>Car Insurance</div>
                      </a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
            <div id={'3'} className='flex gap-10 relative'>
              <div className={`${activeContent === 3 && 'active-icon'} absolute left-[40px] top-[20px]`}>

              </div>
              <div className='flex flex-col gap-6'>
                <div className='text-4xl font-semibold'>Credit Cards</div>
                <div className='flex flex-col gap-3'>
                  <p>CoffeeBreakLoans.com makes it easy to find reputable cards with exceptional rewards programs.</p>
                  <p>By choosing one of our partners, we can guarantee you ll get the best deals available.</p>
                </div>
                <div>
                  <a href='/form-loan' className='border-[3px] border-red w-fit py-2 px-4 rounded-md text-sm lg:text-xl font-bold text-red cursor-pointer'> Compare cards</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Choice