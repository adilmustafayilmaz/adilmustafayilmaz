'use client'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import Spline from '@splinetool/react-spline'
import Scene from '../../components/Scene'
import { Canvas } from '@react-three/fiber'
import Test from '../../components/Test'
import { Environment, OrbitControls } from '@react-three/drei'

export default function Home() {
  return (
    <main>
      <div className='w-[500px] mt-10 flex flex-col justify-center items-center max-md:w-[380px]'>
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
        {/* 
          <div className='h-[400px] w-full m-4 rounded-full'>
            <Spline scene="https://prod.spline.design/RzugIYe-JLCDkEXJ/scene.splinecode"/>
          </div> */}
        <div className='h-[400px] w-full'>
          <Canvas>
            <Test />
            <Environment preset='apartment' />
            <OrbitControls />
          </Canvas>
        </div>

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
