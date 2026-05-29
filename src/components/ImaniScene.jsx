import { Canvas } from '@react-three/fiber';
import StoryEmbers from './StoryEmbers';

export default function ImaniScene() {
  return (
    <div className="imani-scene-container" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      pointerEvents: 'none',
      background: 'radial-gradient(circle at center, #1a0b0b 0%, #050202 100%)'
    }}>
      <Canvas camera={{ position: [0, 0, 16], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffaa00" />
        
        <StoryEmbers />
      </Canvas>
    </div>
  );
}
