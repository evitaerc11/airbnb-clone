'use client'

import Image from "next/image"

export default function Logo() {
  return (
    <Image className="hidden md:block cursor-pointer" height={100} width={100} alt='logo' src={'/images/logo.png'} />
  )
}
