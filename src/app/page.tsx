import Image from 'next/image'
import Navbar from './components/navbar';
import { Main } from './components/main';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';

export default function Home() {
  return (
    <div className='h-screen'>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects/>
      <Contact />
    </div>
  )
}
