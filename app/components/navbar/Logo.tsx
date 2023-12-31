'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Logo() {
  const router = useRouter()

  return (
    <Image
      onClick={() => router.push('/')}
      className='hidden md:block cursor-pointer'
      height={100}
      width={100}
      alt='logo'
      src={'/images/logo.png'}
    />
  )
}
