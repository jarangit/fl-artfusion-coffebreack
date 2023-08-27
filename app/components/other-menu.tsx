import React from 'react'


const mockData = [
  {
    title: 'Loans',
    menus: [
      'Personal Loan',
      'Business Loan',
    ]
  },
  {
    title: 'Insurance',
    menus: [
      'Car Insurance',
    ]
  },
  {
    title: 'Other services',
    menus: [
      'Credit Cards',
    ]
  },
  {
    title: 'Legal',
    menus: [
      'Privacy Policy',
      'Terms of Use',
      'Lending Policy',
      'Credit Authorization',
      'E-Consent',
      'Rates & Fees',
    ]
  },
]
type Props = {}


const OtherMenu = (props: Props) => {
  return (
    <div className=' py-12 border-t'>
      <div className='my-container grid  grid-cols-1 lg:grid-cols-4 gap-10'>
        {mockData.map((item, key) => (
          <div key={key} className={`${key == 3 && 'border-l-2'} px-8`}>
            <div className='text-2xl font-semibold'>{item.title}</div>
            <div className='flex flex-col gap-3 mt-4'>
              {item.menus.map((subItem, subKey) => (
                <a href='/form-loan' key={subKey} className='hover:underline-offset-1 hover:underline cursor-pointer'>
                  {subItem}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OtherMenu