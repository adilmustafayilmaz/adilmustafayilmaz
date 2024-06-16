'use client'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'


export default function Home() {
  return (
    <main>
      <div className='w-[500px] mt-10 flex flex-col justify-center items-center'>
        {/* <Typewriter
          options={{
            strings: "Adil Mustafa Yılmaz",
            autoStart: true,
            loop: false,
          }} />

          <Typewriter options={{
            strings: "Coming Soon ....",
            autoStart: true,
            loop: false
          }}/> */}

        <div className='bg-[#686D76] w-full h-10 flex justify-center items-center rounded-full shadow-md'>
          Hello, I am an indie app developer based in Türkiye!
        </div>

        <h1 className='font-semibold text-[36px] flex justify-start w-full mt-10'>
          Adil Mustafa Yılmaz
        </h1>
        <p className='w-full flex justify-start items-center'>Software Developer ( Developer / Designer )</p>



      </div>
    </main>
  )
}
