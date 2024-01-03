'use client'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'

export default function Home() {
  return (
    <>
      <div className='h-screen flex flex-col justify-center items-center'>
        <Typewriter
          options={{
            strings: "Adil Mustafa Yılmaz",
            autoStart: true,
            loop: false,
          }} />

          <Typewriter options={{
            strings: "Coming Soon ....",
            autoStart: true,
            loop: false
          }}/>


      </div>
    </>
  )
}
