import Image from 'next/image'
import Banner from './components/banner';
import Protect from './components/protect';
import Choice from './components/choice';
import Asked from './components/asked';
import OtherMenu from './components/other-menu';

export default function Home() {
  var _lg_form_init_ = {
    aid: "13405",
    template: "elvis-us",
  };
  return (
    <main className='flex flex-col lg:gap-24'>
      <Banner />
      <Protect />
      <Choice />
      <Asked />
      <OtherMenu />
    </main>
  )
}
