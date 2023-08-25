import React from 'react'
import AccordionItem from './acrodoin-item'

type Props = {}
const mockDataAD = [
  {
    id: 1,
    title: "What is a personal loan?",
    content: `<p>A personal loan is an option for those who need quick funding. It can be used for almost anything a borrower wants and usually must be repaid with a fixed term and interest rate.</p>`
  },
  {
    id: 2,
    title: "Who can take out a personal loan?",
    content: `<ul>
    <div>Typically, personal loan requirements include the following:</div>
    <li>An applicant is an adult (aged 18 and over) U.S. citizen or a permanent resident;</li>
    <li>An applicant provides a valid email address, work phone number, and home phone number;</li>
    <li>An applicant has a job (for about 90 days in the current position) or another legal source of predictable income.</li>
    <li>An applicant’s income is about $1,000 per month after tax withholdings.</li>
    </ul>
    `
  },
  {
    id: 3,
    title: "How much can I get with a personal loan?",
    content: `<p>How much you can borrow depends on multiple factors the lender or lender partner considers, from the specific state’s rules and restrictions to the applicant’s age, repayment capacity, desired payoff time frame, etc. Most of our lenders and lending partners offer personal loans from $2,500 to $35,000.</p>`
  },
  {
    id: 4,
    title: "How do I receive money?",
    content: `<p>Typically, money is deposited in the individual’s bank account the next day after the loan is approved as long as the applicant accepts the loan terms.</p>`
  },
  {
    id: 5,
    title: "Is it possible to get a loan after bankruptcy or having bad credit?",
    content: `
    <p>Although good or excellent credit scores are desirable to get approved for a loan, it all depends on a specific lender’s underwriting standards. In some cases, short-term consumer loans can be an acceptable alternative for applicants with bad credit.</p>
    <p>We always try to find a lender or lending partner who could offer a loan for the amount that any of our customers request. We turn to our network of short-term lenders and lending partners if necessary.</p>
    `
  },
]
const Asked = (props: Props) => {
  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-2 my-container gap-10'>
        <div>
          < div className='w-3/4'>
            <div className='text-5xl font-semibold mb-6'>Frequently Asked Questions</div>
            <p>CoffeeBreakLoans.com is a digital platform offering a convenient way to connect you with reliable lenders or lending partners that would be able to provide you with the required funding.</p>
          </div>
          <div>image</div>
        </div>
        <div>
          <div className='flex flex-col gap-3 mb-6'>
            {mockDataAD.map((item, key) => (
              <div key={key}>
                <AccordionItem data={item} firstActive={item.id === 1} />
              </div>
            ))}
          </div>
          <div className='border-[3px] border-red w-fit py-2 px-4 rounded-md text-xl font-bold text-red cursor-pointer'> See all FAQs</div>
        </div>
      </div>
    </div>
  )
}

export default Asked