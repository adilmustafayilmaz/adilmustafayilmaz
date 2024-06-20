import { MeshDistortMaterial, MeshWobbleMaterial, OrbitControls, useHelper } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import { DirectionalLight, DirectionalLightHelper, Mesh } from 'three'

interface BoxProps {
    args?: [number, number, number]
    color?: string
    position?: [number, number, number]
}

interface TorusKnotProps {
    args?: [number, number, number, number]
    color?: string
    position?: [number, number, number]
}

const Box = ({ args, color, position }: BoxProps) => {

    const ref = useRef<Mesh>(null!)

    const [isHovered, setIsHovered] = useState(false)

    // useFrame((delta, state) => {
    //     const speed = isHovered ? 1 : 0.2
    //     ref.current.rotation.y += state * speed
    // })

    return (
        <mesh ref={ref} position={position} onPointerEnter={(event) => { event.stopPropagation(), setIsHovered(true) }}
            onPointerLeave={() => { setIsHovered(false) }}
        >
            <boxGeometry args={args} />
            <MeshWobbleMaterial color={color} speed={1} factor={0.6} />
        </mesh>
    )
}


const TorusKnot = ({ args, color, position }: TorusKnotProps) => {
    const ref = useRef<Mesh>(null!)

    const [isHovered, setIsHovered] = useState(false)

    // useFrame((delta, state) => {
    //     const speed = isHovered ? 1 : 0.2
    //     ref.current.rotation.y += state * speed
    //     ref.current.rotation.x += state * speed

    // })

    return (
        <mesh position={position} ref={ref} onPointerEnter={(event) => { event.stopPropagation(), setIsHovered(true) }}
            onPointerLeave={() => { setIsHovered(false) }}>
            <torusKnotGeometry args={args} />
            <MeshDistortMaterial color={color} speed={3} factor={2} />
        </mesh>
    )
}

export default function Scene() {

    const directionalLightRef = useRef<DirectionalLight>(null!)

    useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "white")

    return (
        <>
            <directionalLight
                position={[0, 0, 2]}
                intensity={0.5}
                ref={directionalLightRef} />

            <ambientLight intensity={0.4} />
            {/* <Box color='#fff' args={[3,3,3]} position={[0,0,-1]}/> */}
            <TorusKnot color='#fff' args={[0.5, 0.1, 1000, 50]} position={[0, 0, 0]} />
            <OrbitControls enableZoom={true} />
        </>
    )
}
