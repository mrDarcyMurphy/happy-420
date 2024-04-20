import { useGLTF } from '@react-three/drei'

export function PotLeafModel(props) {
  const { nodes, materials } = useGLTF('/pot-leaf.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cannabis_Leaf_Realistic.geometry}
        material={materials.Cannabis_Leaf_Realistic}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ring.geometry}
        material={materials.Ring}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Disc.geometry}
        material={materials.Material}
        scale={0.082}
      />
    </group>
  )
}

useGLTF.preload('/pot-leaf.glb')