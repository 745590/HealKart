import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { assets } from '../assets/assets.js'
import { Minus, Gift,Users,TicketMinus,Leaf,Earth,Settings } from 'lucide-react';

const About = () => {
  return (
    <div>
        <Navbar />
        <div>
        <div className='w-full px-10 py-20 h-screen flex'>
          <div className='w-1/2 '>
          <img src={assets.about_h} alt=""  className='w-11/12'/>
          </div>
          <div className='w-1/2 px-4 py-5'>
          <h1 className='text-4xl font-semibold mb-4'>The Best Infrastructure</h1>
          <p className='text-gray-400 text-md leading-8 pr-20'>
            Unpacked reserved sir offering bed judgment may and quitting speaking. Is do be improved raptures offering required in replying raillery. Stairs ladies friend by in mutual an no. Mr hence chief he cause. Whole no doors on hoped. Mile tell if help they ye full name.
<br />
<br />
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm consequat.
          </p>
          <button className='px-8 py-4 rounded-lg cursor-pointer bg-green-500 text-white font-semibold hover:bg-green-400 mt-10'>
            View Help
          </button>
          </div>
        </div>
        <div>
        <div className="w-full flex justify-center mt-5 mb-2">
          <h1 className="flex items-center text-4xl">
            How to Buy Only the Best <Minus className="mt-2" />
          </h1>
        </div>
        <p className="px-30 text-center text-md text-gray-400">
          Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac
        </p>
      </div>
      <div className='flex gap-3 flex-wrap justify-center my-20'>
        <div className='mb-10 group border border-green-700 hover:border-green-400 relative h-60 w-100 py-16 px-10'>
          <div className='bg-green-700 group-hover:bg-green-400 w-20 h-20 flex justify-center items-center transition-colors duration-300 absolute top-[-32px] left-[34px] border-4 border-white'> 
            <Users size={50} className='text-white'/>
          </div>
            <h3 className='text-xl hover:text-green-400 cursor-pointer '>
              Buy the Best for your Kids
            </h3>
            <p className='text-gray-400 mt-5 text-md'>
              Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
            </p>
        </div>
        <div className='mb-10 group border border-green-700 hover:border-green-400 relative h-60 w-100 py-16 px-10'>
          <div className='bg-green-700 group-hover:bg-green-400 w-20 h-20 flex justify-center items-center transition-colors duration-300 absolute top-[-32px] left-[34px] border-4 border-white'> 
            <Gift size={50} className='text-white'/>
          </div>
            <h3 className='text-xl hover:text-green-400 cursor-pointer '>
              Do not buy too many things
            </h3>
            <p className='text-gray-400 mt-5 text-md'>
              Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
            </p>
        </div>
        <div className='mb-10 group border border-green-700 hover:border-green-400 relative h-60 w-100 py-16 px-10'>
          <div className='bg-green-700 group-hover:bg-green-400 w-20 h-20 flex justify-center items-center transition-colors duration-300 absolute top-[-32px] left-[34px] border-4 border-white'> 
            <TicketMinus size={50} className='text-white'/>
          </div>
            <h3 className='text-xl hover:text-green-400 cursor-pointer '>
              Let kids understand
            </h3>
            <p className='text-gray-400 mt-5 text-md'>
              Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
            </p>
        </div>
        <div className='mb-10 group border border-green-700 hover:border-green-400 relative h-60 w-100 py-16 px-10'>
          <div className='bg-green-700 group-hover:bg-green-400 w-20 h-20 flex justify-center items-center transition-colors duration-300 absolute top-[-32px] left-[34px] border-4 border-white'> 
            <Leaf size={50} className='text-white'/>
          </div>
            <h3 className='text-xl hover:text-green-400 cursor-pointer '>
              Let them appreciate
            </h3>
            <p className='text-gray-400 mt-5 text-md'>
              Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
            </p>
        </div>
        <div className='mb-10 group border border-green-700 hover:border-green-400 relative h-60 w-100 py-16 px-10'>
          <div className='bg-green-700 group-hover:bg-green-400 w-20 h-20 flex justify-center items-center transition-colors duration-300 absolute top-[-32px] left-[34px] border-4 border-white'> 
            <Earth size={50} className='text-white'/>
          </div>
            <h3 className='text-xl hover:text-green-400 cursor-pointer '>
              Do not Deprive the Essentials
            </h3>
            <p className='text-gray-400 mt-5 text-md'>
              Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
            </p>
        </div>
        <div className='mb-10 group border border-green-700 hover:border-green-400 relative h-60 w-100 py-16 px-10'>
          <div className='bg-green-700 group-hover:bg-green-400 w-20 h-20 flex justify-center items-center transition-colors duration-300 absolute top-[-32px] left-[34px] border-4 border-white'> 
            <Settings size={50} className='text-white'/>
          </div>
            <h3 className='text-xl hover:text-green-400 cursor-pointer '>
              Be Sensitive to their needs
            </h3>
            <p className='text-gray-400 mt-5 text-md'>
              Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
            </p>
        </div>
      </div>
    <div>
        <div className="w-full flex justify-center mt-5 mb-2">
          <h1 className="flex items-center text-4xl">
            Meet Our Free Consultation<Minus className="mt-2" />
          </h1>
        </div>
        <p className="px-30 text-center text-md text-gray-400">   
Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac
 </p>
      </div>
      <div className='flex w-full justify-center gap-10 h-[450px] my-10'>
        <img src={assets.doctor1} alt="" className='hover:sepia-50 transition-filter duration-300'/>
        <img src={assets.doctor2} alt="" className='hover:sepia-50 transition-filter duration-300'/>
        <img src={assets.doctor3} alt="" className='hover:sepia-50 transition-filter duration-300'/>
      </div>
        </div>
        <Footer />
    </div>
  )
}

export default About