import { Canvas } from '@react-three/fiber'
import { PotLeafScene } from './PotLeafScene'

function App() {
  return (
    <Canvas id="canvas" shadows>
      <PotLeafScene />
    </Canvas>
  )
}

export default App
