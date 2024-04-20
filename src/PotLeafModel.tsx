import { useGLTF } from '@react-three/drei'
import { Mesh } from 'three'

export function PotLeafModel(props: any) {
  const { nodes, materials } = useGLTF('/pot-leaf.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Cannabis_Leaf_Realistic as Mesh).geometry}
        material={materials.Cannabis_Leaf_Realistic}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Ring as Mesh).geometry}
        material={materials.Ring}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Disc as Mesh).geometry}
        material={materials.Material}
        scale={0.082}
      />
    </group>
  )
}

useGLTF.preload('/pot-leaf.glb')
