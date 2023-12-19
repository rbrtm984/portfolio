import Image from 'next/image'
import Navbar from './components/navbar';
import { Main } from './components/main';
import About from './components/about';

export default function Home() {
  return (
    <div className='h-screen'>
      <Navbar />
      <Main />
      <About />
    </div>
  )
}
