import React from 'react'
import Image from 'next/image';
import { RedButton } from './RedButton';

export const NavBar = () => {
  return (
    <nav className='tracking-wider '>
    <div className='flex justify-between font-bold text-ms'>
      <div className='flex  '>
        <Image alt='FIA' src='/../public/fia_logo.png' width={80} height={5.5}
        className='my-auto mr-3 ml-1 px-5 text-textgray border-bordergray border-r-1 cursor-pointer'
        />
        <div className='my-auto text-textgray text-base'>
          <a className='mx-3 text-black' href="#">F1™</a>
          <a className='mx-3 ' href="#">F2™</a>
          <a className='mx-3 ' href="#">F3™</a>
        </div>
      </div>
      {/* <div className='flex '>
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
    <div className='flex bg-primary text-white text-lg font-titilliumWebSemiBold'>
      <Image src='/f1_logo.svg' alt='F1_logo' height={10} width={32}
      className='w-32 h-10 mx-5 my-4 mr-8 cursor-pointer'
      />
      <ul className='flex'>    
        <button className='py-auto px-4 hover:bg-button2 transition-all duration-200 '>Latest</button>
        <button className='py-auto px-4 hover:bg-button2 transition-all duration-200 '>Video</button>
        <button className='py-auto px-4 hover:bg-button2 transition-all duration-200 '>Schedule</button>
        <button className='py-auto px-4 hover:bg-button2 transition-all duration-200 '>Standings</button>
        <button className='py-auto px-4 hover:bg-button2 transition-all duration-200 '>Drivers</button>
        <button className='py-auto px-4 hover:bg-button2 transition-all duration-200 '>Teams</button>
        <button className='py-auto px-4 hover:bg-button2 transition-all duration-200 '>Gaming</button>
        <button className='py-auto px-4 hover:bg-button2 transition-all duration-200 '>Live Timing</button>
      </ul>
    */}
    </div> 
    
<nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <a href="https://flowbite.com" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <button data-collapse-toggle="mega-menu-full" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div id="mega-menu-full" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col mt-4 text-sm font-medium md:flex-row md:space-x-8 md:mt-0">
                <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                </li>
                <li>
                    <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Company <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                </li>
                <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Resources</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                </li>
            </ul>
        </div>
    </div>
    <div id="mega-menu-full-dropdown" className="mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600">
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
            <ul aria-labelledby="mega-menu-full-dropdown-button">
                <li>
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="font-semibold">Online Stores</div>
                        <span className="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="font-semibold">Segmentation</div>
                        <span className="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="font-semibold">Marketing CRM</div>
                        <span className="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="font-semibold">Online Stores</div>
                        <span className="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="font-semibold">Segmentation</div>
                        <span className="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="font-semibold">Marketing CRM</div>
                        <span className="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
            </ul>
            <ul className="hidden md:block">
                <li>
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="font-semibold">Audience Management</div>
                        <span className="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="font-semibold">Creative Tools</div>
                        <span className="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="font-semibold">Marketing Automation</div>
                        <span className="text-sm font-light text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>

        {/* <div className='absolute -z-10 bg-button2 w-full overflow-hidden shadow-xxs h-32 p-5 opacity-0 transition-all duration-500 delay-200 border-b-1 border-primary group-hover:opacity-100 '/> */}

  </nav>
  )
}
