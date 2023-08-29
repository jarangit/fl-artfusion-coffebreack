import Image from 'next/image'
import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
type Props = {
  data: any
}

const AccordionBannerItem = ({ data, }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <div className='bg-white  rounded-sm  w-full max-w-[300px] mx-10 text-xs'>
        <div className={`flex p-2 justify-between items-center`} onClick={() => { setOpen(!open) }}>
          <div className='flex items-center gap-2'>
            <div>
              <Image
                src={data.image}
                alt=''
                width={20}
                height={20}
              />
            </div>
            <div className='text-xs'>{data.title}</div>
          </div>
          <div>
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>
        <div className={` overflow-hidden transition-all duration-500 ${open ? 'max-h-[1000px] py-6' : 'max-h-0 '}`}>
          <div className={` flex flex-col gap-6 my-container  !text-xs`}>
            <div>
              <div className='font-semibold text-sm'>{data.title}</div>
              <div className='font-semibold text-sm'>{data.subTitle}</div>
            </div>
            <div className='flex flex-col gap-4' dangerouslySetInnerHTML={{ __html: `${data.content}` }}></div>
            <div>
              <div className='flex flex-col items-center gap-3'>
                <a href='/form-loan' className='bg-red p-3 rounded-md w-full text-white font-semibold text-center' >{data.textBut}</a>
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
        </div>
      </div>
    </div>
  )
}

export default AccordionBannerItem