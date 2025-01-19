'use client'

import HiroContainerDisplay from '@/components/display/hiro-container-display'
import { Canvas } from '@react-three/fiber'

export default function Page() {
  return (
    <>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 120,
          position: [-4, 3, 6],
        }}
      >
        <HiroContainerDisplay />
      </Canvas>
    </>
  )
}
