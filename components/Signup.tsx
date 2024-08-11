'use client'
import React, { useState } from 'react'
import LoginPop from '@/components/signup/LoginPop'
import RegisterPop from '@/components/signup/RegisterPop'

export default function Signup() {
    const [userRegistered, setUserRegistered] = useState(true)
    function showRegisterScreen() {
        setUserRegistered(false)
    }
    function showLoginScreen() {
        setUserRegistered(true)
    }

    return (
        <div className='w-full flex flex-col justify-center items-center rounded-md bg-gradient-to-br from-gray-200 to-gray-600'>

            {userRegistered ?
                <LoginPop showRegisterScreen={showRegisterScreen} /> :
                <RegisterPop showLoginScreen={showLoginScreen} />
            }
        </div>
    )
}
