'use client'

import HiroContainerDisplay from '@/components/display/hiro-container-display'
import { Canvas } from '@react-three/fiber'

export default function Page() {
  return (
    <div className='bg-black h-full w-full'>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 120,
          position: [0, 1, 5],
        }}
      >
        <HiroContainerDisplay />
      </Canvas>
    </div>
  )
}
