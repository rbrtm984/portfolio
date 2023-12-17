import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BSFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]" data-testid='navbar'>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/navLogo.png" alt="/" width="75" height="15" />
        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
            </Link>
          </ul>
          <div className='md:hidden'>
            <AiOutlineMenu size={25}/>
          </div>
        </div>
      </div>

      <div className='fixed left-0 w-full h-screen bg-black/70'>
        <div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500'>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image src='/navLogo.png' width='87' height='35' alt='/' />
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose size={25}/>
              </div>
            </div>
            <div className='border-b border-gray-300 my-4 mx-4'>
              <p className='w-[85%] md:w-[90%] py-4'>{'Get the job done'}</p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className="uppercase">
              <Link href='/'> 
                <li className='py-4 text-sm mx-4'>Home</li>
              </Link>
              <Link href='/'> 
                <li className='py-4 text-sm mx-4'>About</li>
              </Link>
              <Link href='/'> 
                <li className='py-4 text-sm mx-4'>Skills</li>
              </Link>
              <Link href='/'> 
                <li className='py-4 text-sm mx-4'>Projects</li>
              </Link>
              <Link href='/'> 
                <li className='py-4 text-sm mx-4'>Contact</li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#8a5665]'>
                Let's Connect
              </p>
              <div>
                <div className='rounded-full'>
                  <FaLinkedinIn />
                </div>
                <div className='rounded-full'>
                  <FaGithub />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;