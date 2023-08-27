"use client"; // This is a client component 👈🏽
import React, { useState } from 'react'
import { HiUsers, HiShoppingBag } from 'react-icons/hi'
import { AiFillCar } from 'react-icons/ai'
import { BsFillCreditCard2BackFill } from 'react-icons/bs'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
type Props = {}
//https://coffeebreakloans.com/images/backgrounds/entry-bg--desktop.jpg

const mockData = [
  {
    title: "PERSONAL LOANS",
    subTitle: "Find a Personal Loan Lender in Few Minutes",
    content: `
      <p>CoffeeBreakLoans.com is your plug when looking for a reliable lender.</p>
      <p>We connect you to financial helpers who will solve your emergencies fast and seamlessly.</p>
      <strong>Learn more about Personal Loans</strong>
    `,
    textBut: "Start Quick Form",
    id: 1
  },
  {
    title: "CREDIT CARDS",
    subTitle: "Premiere Credit Programs on Demand",
    content: `
      <p>Get credit cards tailored to your lifestyle with CoffeeBreakLoans.com. Instead of combing through programs matching your credit and personal needs, let CoffeeBreakLoans.com find the an option in minutes.</p>
      <strong>Learn more about Credit Cards</strong>
      <p></p>
    `,
    textBut: "Compare Options",
    id: 2
  },
  {
    title: "BUSINESS LOANS",
    subTitle: "Get Capital Now from Top Lenders",
    content: `
      <p>We understand the stress of a new business (we’ve been there). That’s why we created the easiest system for finding top-quality business loans on the net.</p>
      <strong>Learn more about Business Loans</strong>
      <p></p>
    `,
    textBut: "Compare Options",
    id: 3
  },
  {
    title: "CAR INSURANCE",
    subTitle: "Protect Yourself on the Road",
    content: `
      <p>Reliable car insurance isn’t an option for protecting your finances. If you find yourself on the wrong end of an accident, insurance quality makes all the difference.</p>
      <strong>Learn more about Car Insurance</strong>
      <p></p>
    `,
    textBut: "Start Quick Form",
    id: 4
  },
]
const Banner = (props: Props) => {
  const [currentContent, setCurrentContent] = useState(1)
  const { push } = useRouter()
  return (
    <div>
      <div
        className={`bg-[url('https://coffeebreakloans.com/images/backgrounds/entry-bg--desktop.jpg')] bg-cover p-24`}
      >
        <div className='text-center lg:w-[50%]'>
          <div className='text-xl lg:text-4xl font-semibold text-white opacity-50 mb-6'>Discover your best</div>
          <div className='text-xl lg:text-7xl text-white font-semibold'>Personal </div>
          <div className='text-xl lg:text-7xl text-white font-semibold'>Finance Options </div>
        </div>
      </div>

      <div className='bg-[#ddc7a5]  h-full lg:h-32 flex justify-center relative'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 relative -top-10  '>
          <div
            onClick={() => setCurrentContent(1)}
            className={`w-[160px] cursor-pointer h-[120px] rounded-lg text-brow bg-white p-3 font-semibold flex justify-center items-center flex-col gap-3 ${currentContent === 1 && '!bg-brow !text-white'}`}
          >
            <div>
              <HiUsers size={30} />
            </div>
            <div> Personal Loans </div>
          </div>
          <div
            onClick={() => setCurrentContent(2)}
            className={`w-[160px] cursor-pointer h-[120px] bg-white rounded-lg text-brow p-3 font-semibold flex justify-center items-center flex-col gap-3 ${currentContent === 2 && '!bg-brow !text-white'}`}
          >
            <div>
              <BsFillCreditCard2BackFill size={30} />
            </div>
            <div>  Credit Cards  </div>
          </div>
          <div
            onClick={() => setCurrentContent(3)}
            className={`w-[160px] cursor-pointer h-[120px] bg-white rounded-lg text-brow p-3 font-semibold flex justify-center items-center flex-col gap-3 ${currentContent === 3 && '!bg-brow !text-white'}`}
          >
            <div>
              <HiShoppingBag size={30} />
            </div>
            <div>  Business Loans  </div>
          </div>
          <div
            onClick={() => setCurrentContent(4)}
            className={`w-[160px] cursor-pointer h-[120px] bg-white rounded-lg text-brow p-3 font-semibold flex justify-center items-center flex-col gap-3 ${currentContent === 4 && '!bg-brow !text-white'}`}
          >
            <div>
              <AiFillCar size={30} />
            </div>
            <div> Car Insurance </div>
          </div>

        </div>
      </div>

      <div>
        {mockData.map((item: any, key: any) => (
          <div key={key} className={` col-span-1 lg:grid-cols-3 gap-10 my-container pt-24  ${currentContent === item.id ? "grid" : "hidden"}`}>
            <div>
              <div className='font-semibold'>{item.title}</div>
              <div className='font-semibold text-2xl'>{item.subTitle}</div>
            </div>
            <div className='flex flex-col gap-4' dangerouslySetInnerHTML={{ __html: `${item.content}` }}></div>
            <div>
              <div className='flex flex-col items-center gap-3'>
                <a href='/form-loan' className='bg-red p-3 rounded-md w-full text-white font-semibold text-center' >{item.textBut}</a>
                <div className='flex gap-6 items-center'>
                  <div className='flex gap-3 text-xs font-bold items-center'>
                    <div>
                      <Image
                        src={'/img/protect.png'}
                        alt=''
                        width={30}
                        height={30}
                      />
                    </div>
                    <div>Protected</div>
                  </div>
                  <div className='flex gap-3 text-xs font-bold items-center'>
                    <div>
                      <Image
                        src={'/img/ssl.png'}
                        alt=''
                        width={30}
                        height={30}
                      />
                    </div>
                    <div>
                      <div>SSL Secure</div>
                      <div>Connection</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Banner