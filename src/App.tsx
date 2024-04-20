import { Canvas } from '@react-three/fiber'
import { PotLeafScene } from './PotLeafScene'

function App() {
  return (
    <>
      <Canvas id="canvas" shadows>
        <PotLeafScene />
      </Canvas>
      <div id="overlay">
        <a href="/happy-420/pot-leaf.usdz">View it in AR</a>
      </div>
    </>
  )
}

export default App
