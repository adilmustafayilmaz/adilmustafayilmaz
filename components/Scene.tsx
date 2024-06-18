import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { Mesh } from 'three'

const Torus = () => {

    const ref = useRef<Mesh>(null!)
    useFrame((delta, state) => {
        ref.current.rotation.x += 0.004
        ref.current.rotation.y += 0.003
    })

    return (
        <mesh ref={ref}>
            <boxGeometry args={[3,3,3]}/>
            <meshPhongMaterial color={"#fff"} />
        </mesh>
    )
}

export default function Scene() {
    return (
        <Canvas>
            <directionalLight position={[0, 0, 2]} intensity={0.5} />
            <ambientLight intensity={0.4} />
            <Torus />
        </Canvas>
    )
}
