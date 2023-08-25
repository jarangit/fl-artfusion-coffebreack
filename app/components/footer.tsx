import React from 'react'

type Props = {}

const mockData = [
  'CoffeeBreakLoans.com is not a lender, and does not make credit decisions, take loan applications, arrange, broker, originate, service, underwrite, fund, or collect payments for loans. Information you submit here is not an application for credit, but rather is an inquiry to be connected with one or more financial service providers that may be able to help you with your financial needs. CoffeeBreakLoans.com also is not an agent of either you or any lenders or other financial service providers. CoffeeBreakLoans.com’s services (generally known as lead generation) are administrative only and are free to you as a consumer.',
  'When you submit your information via CoffeeBreakLoans.com for a loan product, a network of approved lenders will review your information, review your credit profile, may request additional information from you, and then decide whether to invite you to apply for one or more of their products or services, make you a conditional loan offer, or even a firm offer of credit (lenders may require you to complete a separate loan application). CoffeeBreakLoans.com will relay lenders’ information back to you, and you can decide what is best for your situation. In the event there is only one responsive lender, you may be redirected to that lender’s website or loan offer. You agree to rely on your own research and judgment as to which financial products or services are appropriate for your needs and financial situation (if any). It is up to you to carefully review the terms of any loan, credit card, insurance or other offer to make sure it is appropriate for your circumstances.',
  'Clicking on links to offers and advertisements will take you away from CoffeeBreakLoans.com to third party websites that are independently operated or controlled. CoffeeBreakLoans.com is not responsible for offers made by lenders or other financial service providers, or for the content or functionality of third party websites.',
  'By submitting your information via CoffeeBreakLoans.com, you agree to the Credit Authorization, to authorize CoffeeBreakLoans.com and its network of lenders and other financial service providers to perform a credit check for identity verification and to assess your creditworthiness, and for CoffeeBreakLoans.com to share such information with them. You also agree to the use of electronic disclosures, notices and other information, as well as the use of electronic signatures. Please see the E-Consent disclosure, which is an important part of our Terms of Service, for more information. If you do not agree to CoffeeBreakLoans.com’s Credit Authorization, E-Consent, or Terms of Service, please refrain from using this website.',
  'Lenders in CoffeeBreakLoans.com’s network offer loans with an annual percentage rate (APR) of less than 36%. Rates and other terms vary between lenders. Loans are subject to lenders’ approval. You should receive disclosures directly from lenders about the APR and cost of credit for any loan offered to you, as required by the federal Truth-in-Lending Act (TILA); this can help you compare the cost of credit between multiple loan offers.',
]
const Footer = (props: Props) => {

  return (
    <div>
      <div className=' py-6 text-center w-full flex justify-center bg-[#f4f0ec] font-semibold'>
        <div className='flex divide-x-4 divide-black'>
          <div className='px-3'>FAQ</div>
          <div className='px-3'>Definitions</div>
        </div>
      </div>
      <div className='bg-[#f8f6f4]'>
        <div className='my-container py-24'>
          <div className='font-semibold mb-3'>PLEASE REVIEW THESE IMPORTANT DISCLOSURES</div>
          <div className='flex flex-col gap-4'>
            {mockData.map((item: any, key: any) => (
              <p key={key} className='text-xs '>{item}</p>
            ))}
          </div>
        </div>
      </div>
      <div className='bg-[#2e2825] text-white py-6'>
        <div className='text-center'>© 2023 CoffeeBreakLoans.comAll Rights Reserved</div>
      </div>
    </div>
  )
}

export default Footer