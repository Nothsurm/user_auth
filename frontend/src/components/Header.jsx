import { Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='flex flex-row gap-10 justify-center text-white'>
        <Link to='/'>
            <button className='bg-indigo-500 p-1 rounded-lg'>Home</button>
        </Link>
        <Link to='/signin'>
            <button className='bg-indigo-500 p-1 rounded-lg'>Sign In</button>
        </Link>
        <Link to='/signup'>
            <button className='bg-indigo-500 p-1 rounded-lg'>Sign Up</button>
        </Link>
    </div>
  )
}
