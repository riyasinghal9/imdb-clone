import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/imdb.jpeg'

export default function Navbar() {
  return (
          <div className='flex space-x-8 items-center pl-3 px-4'>
            <Link to='/'>
                <img className='w-[50px]' src={Logo} alt='logo' />
            </Link>
            <Link to='/'className='text-blue-500 text-3xl font-bold ' >
                Movies
            </Link>
            <Link to='/watchlist' className='text-blue-500 text-3xl font-bold '>
                Watchlist
            </Link>
        </div>
  )
}
