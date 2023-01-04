import React from 'react'
import Image from 'next/image';
import { RedButton } from './RedButton';

export const NavBar = () => {
  return (
    <nav className=' '>
    <div className='flex justify-between font-bold text-ms'>
      <div className='flex  '>
        <Image alt='FIA' src='/../public/fia_logo.png' width={80} height={5.5}
        className='my-auto mr-3 ml-1 px-5 text-textgray border-bordergray border-r-1 cursor-pointer'
        />
        <div className='my-auto text-textgray text-base'>
          <a className='mx-3 text-black' href="#">F1 </a>
          <a className='mx-3 ' href="#">F2</a>
          <a className='mx-3 ' href="#">F3</a>
        </div>
      </div>
      <div className='flex '>
          <div className='flex my-auto gap-8'>
            <a className='py-1 border-t-2 border-b-2 border-transparent hover:text-primary hover:border-b-primary ' href='#'>AUTHENTICS</a>
            <a className='py-1 border-t-2 border-b-2 border-transparent hover:text-primary hover:border-b-primary ' href='#'>STORE</a>
            <a className='py-1 border-t-2 border-b-2 border-transparent hover:text-primary hover:border-b-primary ' href='#'>TICKETS</a>
            <a className='py-1 border-t-2 border-b-2 border-transparent hover:text-primary hover:border-b-primary ' href='#'>HOSPITALITY</a>
            <a className='py-1 border-t-2 border-b-2 border-transparent hover:text-primary hover:border-b-primary ' href='#'>EXPERIENCES</a>
          </div>
          <Image src='/f1tv_logo.svg' alt='f1tv_logo' height={100} width={100}
          className='my-auto mx-3 px-5 h-6 text-textgray border-bordergray border-x-1 cursor-pointer'
          />
          <button className='m-1 p-3 px-4  text-white transition-all duration-300 bg-button2 rounded-md border-none hover:bg-opacity-80' >SIGN IN</button>
          <RedButton value='SUBSCRIBE' />
      </div>
    </div>
    <div className='flex bg-primary text-white text-lg'>
      <Image src='/f1_logo.svg' alt='F1_logo' height={10} width={32}
      className='w-32 h-10 mx-5 my-4 mr-8 cursor-pointer'
      />
      <ul className='flex'>
        <li className='relative group '>
            <button className='py-auto px-4 hover:bg-button2 transition-all duration-200 '>Latest</button>
            <div
            className='absolute top-0 left-0 bg-button2 transition invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:transform z-50 w-96'
            >
                <div className='relative '><p>products</p></div>
            </div>
        </li>
        <button className='py-auto px-4 hover:bg-button2 transition-all duration-200 '>Video</button>
        <button className='py-auto px-4 hover:bg-button2 transition-all duration-200 '>Schedule</button>
        <button className='py-auto px-4 hover:bg-button2 transition-all duration-200 '>Standings</button>
        <button className='py-auto px-4 hover:bg-button2 transition-all duration-200 '>Drivers</button>
        <button className='py-auto px-4 hover:bg-button2 transition-all duration-200 '>Teams</button>
        <button className='py-auto px-4 hover:bg-button2 transition-all duration-200 '>Gaming</button>
        <button className='py-auto px-4 hover:bg-button2 transition-all duration-200 '>Live Timing</button>
      </ul>
    </div>
        {/* <div className='absolute -z-10 bg-button2 w-full overflow-hidden shadow-xxs h-32 p-5 opacity-0 transition-all duration-500 delay-200 border-b-1 border-primary group-hover:opacity-100 '/> */}

  </nav>
  )
}
