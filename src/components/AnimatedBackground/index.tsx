'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useSelector } from 'react-redux';

export default function AnimatedBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  const theme = useSelector((state: Record<string, any>) => state.theme.mode); // 'light' | 'dark'

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current?.appendChild(renderer.domElement);

    // Small particle system
    const particlesCount = 300;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const color = theme === 'dark' ? '#14B8A6'  : '#14B8A6' ;

    const material = new THREE.PointsMaterial({
      color,
      size: 0.04,
      transparent: true,
      opacity: 0.5,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.0007;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, [theme]);

  const backgroundStyle =
    theme === 'dark'
      ? 'linear-gradient(135deg, #0f0f1a, #1a1a2e)'
      : 'linear-gradient(135deg, #f2f4f8, #dbe2ef)';

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 -z-10"
      style={{
        width: '100%',
        height: '100%',
        background: backgroundStyle,
      }}
    />
  );
}
