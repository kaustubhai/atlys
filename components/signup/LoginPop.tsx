'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

type LoginPopProps = {
    showRegisterScreen: () => void;
}

export default function LoginPop({ showRegisterScreen }: LoginPopProps) {
    const [showPassword, setShowPassword] = useState(false)
    function toggleShowPassword() {
        setShowPassword(!showPassword)
    }

    return (
        <div className="loginForm bg-gray-700 p-8 rounded-md flex flex-col items-center">
            <div className="formHero flex flex-col items-center mb-8">
                <h1 className='text-gray-400 uppercase text-sm mb-2'>Welcome back</h1>
                <h2 className='text-white text-lg'>Log into your account</h2>
            </div>
            <div className="formElement flex flex-col w-full my-2">
                <label className='text-gray-300 text-sm mb-2' htmlFor="email">
                    Email or Username
                </label>
                <input
                    className='rounded py-2 px-4 bg-gray-700 placeholder:text-gray-500 border border-gray-600 focus:outline-none'
                    placeholder='Enter your email or username'
                    type="text"
                    name="email"
                />
            </div>
            <div className="formElement flex flex-col w-full my-2">
                <label className='text-gray-300 text-sm mb-2' htmlFor="password">
                    Password
                </label>
                <div className="flex rounded bg-gray-700 border border-gray-600">
                    <input
                        className='rounded placeholder:text-gray-500 bg-gray-700 py-2 px-4 focus:outline-none w-full'
                        placeholder='Enter your password'
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                    />
                    <button onClick={toggleShowPassword} className="bg-gray-700 w-12">
                        <Image className='mx-auto' src="./showPassword.svg" alt="eye" width={20} height={20} />
                    </button>
                </div>
            </div>
            <Link href={"/wall"} className="bg-blue-500 hover:bg-blue-600 transition-all w-full py-3 my-4 rounded text-center">Login Now</Link>
            <p className='text-sm text-gray-500 text-left w-full'>
                Not registered yet? {' '}
                <button onClick={showRegisterScreen} type='button' className='text-gray-300'>
                    Register →
                </button>
            </p>
        </div>
    )
}
