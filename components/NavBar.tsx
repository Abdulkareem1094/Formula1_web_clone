import React from 'react'
import Image from 'next/image';
import img from '../public/f1grid.jpg';
import { RedButton } from './RedButton';
import { SlMenu, SlUser} from 'react-icons/sl'
import { NewsCard } from './NewsCard'
import { useState } from 'react';

export const NavBar = () => {

  const [ menu, setMenu ] = useState(false)

  const toggleMenu = () => {
    setMenu( !menu ) 
  }

  return (
    <nav>
    <div className='hidden justify-between font-bold text-ms lg:flex'>
      <div className='flex '>
        <Image alt='FIA' src='/../public/fia_logo.png' width={80} height={5.5}
        className='my-auto mr-3 ml-1 px-5 text-textgray border-bordergray border-r-1 cursor-pointer'
        />
        <div className='my-auto text-textgray text-base'>
          <a className='mx-3 text-black' href="#">F1™</a>
          <a className='mx-3 ' href="#">F2™</a>
          <a className='mx-3 ' href="#">F3™</a>
        </div>
      </div>
      <div className='flex '>
          <div className='flex my-auto gap-8 '>
            <a className='py-1 border-t-2 border-b-2 border-transparent hover:text-primary hover:border-b-primary ' href='#'>AUTHENTICS</a>
            <a className='py-1 border-t-2 border-b-2 border-transparent hover:text-primary hover:border-b-primary ' href='#'>STORE</a>
            <a className='py-1 border-t-2 border-b-2 border-transparent hover:text-primary hover:border-b-primary ' href='#'>TICKETS</a>
            <a className='py-1 border-t-2 border-b-2 border-transparent hover:text-primary hover:border-b-primary ' href='#'>HOSPITALITY</a>
            <a className='py-1 border-t-2 border-b-2 border-transparent hover:text-primary hover:border-b-primary ' href='#'>EXPERIENCES</a>
          </div>
          <Image src='/f1tv_logo.svg' alt='f1tv_logo' height={100} width={100}
          className='my-auto mx-3 px-5 h-6 text-textgray border-bordergray border-x-1 cursor-pointer'
          />
          <RedButton className='hover:bg-opacity-80 bg-button2' value='SIGN IN'/>
          <RedButton className='bg-primary ' value='SUBSCRIBE' />
      </div>
    </div>
    <div className='flex w-full relative bg-primary text-white text-lg font-titilliumWebSemiBold'>
      <div className= {`flex w-full lg:w-fit ${menu? 'hidden' : ''} `} >
        <SlMenu className='flex mx-2 h-11 cursor-pointer w-11 my-auto p-3 rounded-md lg:hidden'
        onClick={toggleMenu}
        /> 
        <div className='mx-auto lg:mx-0 ' >
          <Image src='/f1_logo.svg' alt='F1_logo' height={10} width={32}
          className='w-32 h-10 mx-auto my-4 mr-8 cursor-pointer lg:mx-5'/>
        </div> 
        <SlUser className='flex mx-3 h-11 cursor-pointer w-11 my-auto p-3 rounded-md bg-button2 lg:hidden' />
      </div>
      <div className= {`flex w-full lg:w-fit ${menu? 'flex' : 'hidden'} `} >
        <SlMenu className='flex mx-23 h-11 cursor-pointer w-11 my-auto p-3 rounded-md lg:hidden'
        onClick={toggleMenu}
        /> 
        <div className='mx-auto lg:mx-0 ' >
          <Image src='/f1_logo.svg' alt='F1_logo' height={7} width={23}
          className='w-23 h-7 mx-auto my-4 mr-8 cursor-pointer lg:mx-5'/>
        </div> 
        <SlUser className='flex mx-3 h-11 cursor-pointer w-11 my-auto p-3 rounded-md bg-button2 lg:hidden' />
      </div>

      <div className='hidden lg:flex'>
        <div className='group'>
            <button className='py-auto h-full px-4 group-hover:bg-button2 transition-all duration-300 '>Latest &darr;</button>
            <div className=' gap-2 absolute left-0 p-10 bg-button2 w-full shadow-xxs transition-all duration-500 delay-300 border-b-1 border-primary hidden group-hover:flex '>
            <NewsCard
                className1='  '
                className2='text-white'
                type='NEWS'
                text='WATCH: Extended highlights of your favourite race of last year – the 2022 British Grand Prix'
                image={img}
                />
                <NewsCard
                className1='  '
                className2='text-white'
                type='NEWS'
                text='WATCH: Extended highlights of your favourite race of last year – the 2022 British Grand Prix'
                />
                <NewsCard
                className1='  '
                className2='text-white'
                type='NEWS'
                text='WATCH: Extended highlights of your favourite race of last year – the 2022 British Grand Prix'
                />
                <NewsCard
                className1='  '
                className2='text-white'
                type='NEWS'
                text='WATCH: Extended highlights of your favourite race of last year – the 2022 British Grand Prix'
                />
            </div>             
        </div>    
        <button className='py-auto px-4 hover:bg-button2 transition-all duration-200 '>Video</button>
        <div className='group'>
            <button className='py-auto h-full px-4 group-hover:bg-button2 transition-all duration-300 '>Schedule &darr;</button>
            <div className='absolute left-0 p-10 bg-button2 w-full shadow-xxs transition-all duration-500 delay-300 border-b-1 border-primary hidden group-hover:flex '/>           
        </div>    
        <div className='group'>
            <button className='py-auto h-full px-4 group-hover:bg-button2 transition-all duration-300 '>Standings &darr;</button>
            <div className='absolute left-0 p-10 bg-button2 w-full shadow-xxs transition-all duration-500 delay-300 border-b-1 border-primary hidden group-hover:flex '/>           
        </div>    
        <div className='group'>
            <button className='py-auto h-full px-4 group-hover:bg-button2 transition-all duration-300 '>Drivers &darr;</button>
            <div className='absolute left-0 p-10 bg-button2 w-full shadow-xxs transition-all duration-500 delay-300 border-b-1 border-primary hidden group-hover:flex '/>           
        </div>    
        <div className='group'>
            <button className='py-auto h-full px-4 group-hover:bg-button2 transition-all duration-300 '>Teams &darr;</button>
            <div className='absolute left-0 p-10 bg-button2 w-full shadow-xxs transition-all duration-500 delay-300 border-b-1 border-primary hidden group-hover:flex '/>           
        </div>    
        <div className='group'>
            <button className='py-auto h-full px-4 group-hover:bg-button2 transition-all duration-300 '>Gaming &darr;</button>
            <div className='absolute left-0 p-10 bg-button2 w-full shadow-xxs transition-all duration-500 delay-300 border-b-1 border-primary hidden group-hover:flex '/>           
        </div>    
        <button className='py-auto px-4 hover:bg-button2 transition-all duration-200 '>Live Timing</button>
      </div>  
    </div> 
    

  </nav>
  )
}
