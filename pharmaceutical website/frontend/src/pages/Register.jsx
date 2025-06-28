import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import Footer from '../components/Footer'


const Register = () => {
  return (
    <div>
            <div>
        <Navbar />
        <div className='w-full h-screen flex justify-center my-3 '>

        <div className='h-10/12 w-1/3 bg-linear-to-b from-green-300 to-green-50 rounded-xl shadow-2xl p-10'>
        <h1 className='text-center font-semibold text-3xl text-shadow-lg'>Register</h1>
        <form className='p-5'>
          <div className='flex w-full justify-evenly'>
            <img src={assets.doctor} alt="" className='h-20 border rounded-full shadow-2xl cursor-pointer hover:bg-green-50'/>
            <img src={assets.patient} alt="" className='h-20 border rounded-full shadow-2xl cursor-pointer hover:bg-green-50'/>
            <img src={assets.hospital} alt="" className='h-20 border rounded-full shadow-2xl cursor-pointer hover:bg-green-50'/>
          </div>
        <div>
        <p className='my-2'>
          Name
        </p>
        <input type="text" placeholder='John doe' className='outline-none bg-white w-full p-2 rounded-xl shadow-2xl mb-2'/>
        </div>
        <div>
        <p className='my-2'>
          Email
        </p>
        <input type="email" placeholder='you@example.com' className='outline-none bg-white w-full p-2 rounded-xl shadow-2xl mb-2'/>
        </div>
        <div>
        <p className='my-2'>
          Password
        </p>
        <input type="password" placeholder='Password' className='outline-none bg-white w-full p-2 rounded-xl shadow-2xl mb-2'/>
        </div>
        <button className='w-full bg-green-600 text-white text-lg py-2 rounded-xl mt-4'>
          Login
        </button>
        </form>
         <Link to="/login" ><p className='ml-2 text-center text-lg'>Already have an account?</p></Link>
        </div>
    </div>
        </div>
        <Footer />
    </div>
  )
}

export default Register