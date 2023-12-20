import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='w-full lg: h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
            <h2 className='py-4'>Get in Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* left */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <img className="rounded-xl hover:scale-105 ease-in duration-300" src="https://images.unsplash.com/photo-1567473030492-533b30c5494c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/ "/>
                        </div>
                        <div>
                            <h2 className="py-2">Robert Mayo</h2>
                            <p>Front-End Developer</p>
                            <p>I am available for freelance or full-time positions. Contact me and lets talk.</p>
                        </div>
                    </div>
                    <div>
                        <p className="uppercase pt-8">Connect With Me</p>
                        <div className='flex items-center justify-between py-4'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' data-testid="linkedin-icon">
                                <FaLinkedin />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' data-testid="github-icon">
                                <FaGithub />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' data-testid="mail-icon">
                                <AiOutlineMail />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300' data-testid="person-lines-icon">
                                <BsFillPersonLinesFill />
                            </div>
                        </div>
                    </div>
                </div>
                {/* right */}
            </div>
        </div>
    </div>
  )
}

export default Contact