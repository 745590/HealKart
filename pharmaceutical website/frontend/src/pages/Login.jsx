import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'

const Login = () => {
  return (
    <div>
        <Navbar />
        <div className='w-full h-screen flex justify-center my-10 '>

        <div className='h-3/4 w-1/3 bg-linear-to-b from-green-50 to-green-300 rounded-xl shadow-2xl p-10'>
        <h1 className='text-center font-semibold text-3xl text-shadow-lg'>Login</h1>
        <form className='p-5'>

        <div>
        <p className='my-2'>
          Email
        </p>
        <input type="text" placeholder='you@example.com' className='outline-none bg-white w-full p-2 rounded-xl shadow-2xl mb-4'/>
        </div>
        <div>
        <p className='my-2'>
          Password
        </p>
        <input type="password" placeholder='Password' className='outline-none bg-white w-full p-2 rounded-xl shadow-2xl mb-4'/>
        </div>
        <button className='w-full bg-green-600 text-white text-lg py-2 rounded-xl mt-4'>
          Login
        </button>
        </form>
        <Link to="/"><p className='text-center text-lg'>Forgot password?</p></Link>
        <div className='flex justify-center mt-10 text-lg'>
          <p>Don't have an account? </p> <Link to='/register' className='text-green-900'><p className='ml-2'> Register</p></Link>
        </div>
        </div>
    </div>
    <Footer />
        </div>
  )
}

export default Login