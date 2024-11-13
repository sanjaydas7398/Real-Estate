import React from 'react'
import {FaSearch} from "react-icons/fa";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div>
        <>
          <header className='bg-slate-400 shadow-md'>
              <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to="/">
              <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-slate-500'>Sanjay</span>
                <span className='text-slate-500'>Estate</span>
              </h1>
              </Link>

              <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                <input type='text' placeholder='Search.....' className='bg-transparent focus:outline-none w-24 sm:w-64' />
                   <FaSearch className='text-slate-600' />
              </form>

              <ul className='flex gap-4'>
                  <Link to="/" className='hidden sm:inline text-slate-700 hover:underline'>Home</Link>
                  <Link to="/about" className='hidden sm:inline text-slate-700 hover:underline'>About</Link>
                  <Link to="/signin" className=' text-slate-700 hover:underline'>SignIn</Link>
              </ul>
              </div>
          </header>
        </>
    </div>
  )
}

export default Header
