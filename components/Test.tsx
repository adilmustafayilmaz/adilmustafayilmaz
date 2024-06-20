import React from 'react'
import { MeshWobbleMaterial, useGLTF } from '@react-three/drei'


export default function Test() {
  const model = useGLTF('/retro_computer_setup_free.glb')

  return (
    <mesh>
      <primitive object={model.scene}/>
    </mesh>
  )
}
