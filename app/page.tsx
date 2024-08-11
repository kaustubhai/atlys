import React from 'react'
import Image from 'next/image'
import Signup from '@/components/Signup'

export default function Home() {
  return (
    <div className='w-[30%] flex flex-col items-center'>
      <Image className='my-8' src="./homeIcon.svg" alt='logo' width={32} height={32} />
      <Signup />
    </div>
  )
}
