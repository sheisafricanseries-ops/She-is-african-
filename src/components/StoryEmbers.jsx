import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';

export default function StoryEmbers() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      // Calculate scroll progress for cinematic camera movement
      const scrollY = window.scrollY;
      const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight);
      const scrollProgress = scrollY / maxScroll;

      // Slow continuous rotation + scroll-driven rotation
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.03 + (scrollProgress * Math.PI);
      
      // Move the embers up slightly as we scroll down
      groupRef.current.position.y = scrollProgress * 3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Background ambient embers */}
      <Sparkles count={1000} scale={[30, 40, 30]} size={1.5} speed={0.2} opacity={0.4} color="#ff8c00" />
      
      {/* Mid-ground glowing embers */}
      <Sparkles count={500} scale={[20, 30, 20]} size={3} speed={0.4} opacity={0.7} color="#d4af37" noise={1} />
      
      {/* Foreground bright story sparks */}
      <Sparkles count={150} scale={[10, 20, 10]} size={5} speed={0.8} opacity={1} color="#ffffff" noise={2} />
    </group>
  );
}
