import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { PotLeafModel } from "./PotLeafModel"

export function PotLeafScene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <OrbitControls />
      <ambientLight intensity={0.015} />
      <Environment
        background={true}
        backgroundBlurriness={0.5}
        preset="forest"
        />
      <PotLeafModel />
    </>
  )
}
