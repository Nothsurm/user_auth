import { Button, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {

    const handleSubmit = async () => {

    }

  return (
    <div className='min-h-screen flex justify-center items-center'>
        <form 
            onSubmit={handleSubmit} 
            className="w-auto sm:w-96 h-96 p-4 bg-indigo-300 flex flex-col items-center gap-6 rounded-lg"
        >
            <h1 className='text-xl'>Register</h1>
            <div className="flex flex-row items-center gap-2">
                <label className='text-sm'>Username:</label>
                <TextInput
                    type="text" 
                    placeholder='Enter name'
                />
            </div>
            <div className="flex flex-row items-center gap-2">
                <label className='text-sm'>Email:</label>
                <TextInput
                    type="email" 
                    placeholder='Enter email'
                />
            </div>
            <div className="flex flex-row items-center gap-2">
                <label className='text-sm'>Password:</label>
                <TextInput
                    type="password" 
                    placeholder='*******'
                />
            </div>
            <button 
                className='p-1 rounded-lg bg-indigo-500 px-3 w-20 text-white hover:bg-indigo-700 transition-all duration-100'

            >
                Register
            </button>
            <div className="flex flex-col">
                <p className='text-sm'>Already have an account?</p>
                <Link to='/signin' className='text-sm text-blue-500 hover:underline'>Sign In</Link>
            </div>
        </form>
    </div>
  )
}
