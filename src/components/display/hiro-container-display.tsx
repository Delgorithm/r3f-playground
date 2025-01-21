import { HiroContainerModel } from '../model/hiro-container-model.tsx'
import { Center, Float, OrbitControls, ScrollControls } from '@react-three/drei'
import { Suspense } from 'react'

export default function HiroContainerDisplay() {
  return (
    <>
      <OrbitControls enableRotate={false} enableZoom={false} />

      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <Suspense fallback={null}>
        <Float>
          <ScrollControls pages={2} damping={0.75}>
            <Center>
              <HiroContainerModel rotation-y={[-0.55]} />
            </Center>
          </ScrollControls>
        </Float>
      </Suspense>
    </>
  )
}
