import { HiroContainerModel } from '../model/hiro-container-model.tsx'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'

export default function HiroContainerDisplay() {
  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <Suspense fallback={<p>Chargement...</p>}>
        <HiroContainerModel />
      </Suspense>
    </>
  )
}
