import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
  return (
    <header className='sticky top-3 w-[550px] h-[50px] bg-[#434446] flex justify-center items-center mt-3 rounded-2xl shadow-2xl'>
      <div className='w-full flex justify-center items-center space-x-14'>
        <Link href="/" className='hover:font-black transition-all'>Adil Mustafa Yılmaz</Link>
        <Link href="/projects" className=' hover:font-black transition-all'>Projects</Link>
        <Link href="https://github.com/adilmustafayilmaz" target='_blank' className=' hover:font-black transition-all flex justify-around items-center w-1/6'>
          <FontAwesomeIcon icon={faGithub} className='w-[20px] h-[20px]'/>
          Github
        </Link>
      </div>
    </header>
  )
}
