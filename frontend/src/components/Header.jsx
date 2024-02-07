import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { useState } from 'react'

export default function Header() {
    const [isOpen, setOpen] = useState(false)
  return (
    <>
    <navbar className='border-b-2 p-2 flex flex-row justify-around items-center'>
        <Link to='/'>
            <button className='px-2 py-1 bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-300 rounded-md'>
                <span className='text-sm sm:text-xl font-semibold text-zinc-700'>User</span>
                _
                <span className='text-sm sm:text-xl'>Auth</span>
            </button>
        </Link>
        <div className="hidden sm:flex flex-row gap-8">
            <Link to='/'>
                <Button className='hover:text-zinc-500'>Home</Button>
            </Link>
            <Link to='/signin'>
                <Button className='hover:text-zinc-500'>Sign-In</Button>
            </Link>
            <Link to='/signup'>
                <Button className='hover:text-zinc-500'>Register</Button>
            </Link>
        </div>
        <div className="flex sm:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
    </navbar>
    {
        isOpen && (
            <div className='w-full flex flex-col divide-y-2 justify-center items-center'>
                <Link to='/'>
                    <Button className='hover:text-zinc-500'>Home</Button>
                </Link>
                <Link to='/signin'>
                    <Button className='hover:text-zinc-500'>Sign-In</Button>
                </Link>
                <Link to='/signup'>
                    <Button className='hover:text-zinc-500'>Register</Button>
                </Link>
            </div>
        )
    }
    </>
  )
}
