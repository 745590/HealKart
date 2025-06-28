import React from 'react'
import { assets } from '../assets/assets'

const Hero2 = () => {
  return (
    <div className="relative w-full h-[588px] overflow-hidden my-6">

      <img
        src={assets.hero2}
        alt="Safety Mask"
        className="w-full h-[588px]"
      />

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center pl-12 sm:pl-24 text-white bg-black/10">
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-4 max-w-[600px]">
          Grade A Safety Masks for Sale. Hurry!
        </h2>

        <p className="text-lg font-medium mb-4">Offer Ends on</p>

        <div className="flex gap-4 text-center text-black">
          <div className="bg-white p-3 rounded-lg w-16">
            <h3 className="text-2xl font-bold">00</h3>
            <p className="text-xs text-gray-600">Days</p>
          </div>
          <div className="bg-white p-3 rounded-lg w-16">
            <h3 className="text-2xl font-bold">00</h3>
            <p className="text-xs text-gray-600">Hours</p>
          </div>
          <div className="bg-white p-3 rounded-lg w-16">
            <h3 className="text-2xl font-bold">00</h3>
            <p className="text-xs text-gray-600">Minutes</p>
          </div>
          <div className="bg-white p-3 rounded-lg w-16">
            <h3 className="text-2xl font-bold">00</h3>
            <p className="text-xs text-gray-600">Seconds</p>
          </div>
        </div>

        <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full w-fit text-lg font-medium shadow-lg transition-all">
          Buy Now
        </button>
      </div>
    </div>
  )
}

export default Hero2