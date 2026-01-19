import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Bubble3D - A lively 3D conversational AI bubble
 * Uses custom GLSL shaders for iridescent color effects
 */
function Bubble3D() {
    const meshRef = useRef<THREE.Mesh>(null);

    // Custom shader for iridescent bubble effect
    const shaderMaterial = useMemo(() => {
        return new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uColor1: { value: new THREE.Color('#8b5cf6') }, // Purple
                uColor2: { value: new THREE.Color('#06b6d4') }, // Cyan
                uColor3: { value: new THREE.Color('#ec4899') }, // Pink
                uColor4: { value: new THREE.Color('#fbbf24') }, // Amber
            },
            vertexShader: `
                varying vec3 vNormal;
                varying vec3 vPosition;
                uniform float uTime;
                
                void main() {
                    vNormal = normalize(normalMatrix * normal);
                    vPosition = position;
                    
                    // Lively organic distortion - GPU accelerated
                    vec3 pos = position;
                    float distortion = sin(pos.x * 4.0 + uTime * 3.0) * 0.08 +
                                      sin(pos.y * 3.5 + uTime * 2.5) * 0.08 +
                                      sin(pos.z * 3.0 + uTime * 2.0) * 0.06 +
                                      sin(pos.x * 6.0 + pos.y * 5.0 + uTime * 4.0) * 0.04;
                    
                    // Breathing/pulsing effect
                    float pulse = sin(uTime * 2.5) * 0.03 + 1.0;
                    pos = pos * pulse;
                    pos += normal * distortion;
                    
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                }
            `,
            fragmentShader: `
                varying vec3 vNormal;
                varying vec3 vPosition;
                uniform float uTime;
                uniform vec3 uColor1;
                uniform vec3 uColor2;
                uniform vec3 uColor3;
                uniform vec3 uColor4;
                
                void main() {
                    // Fresnel effect for edge glow
                    vec3 viewDirection = normalize(cameraPosition - vPosition);
                    float fresnel = pow(1.0 - dot(viewDirection, vNormal), 2.5);
                    
                    // Animated color mixing
                    float t1 = sin(vPosition.x * 3.0 + uTime * 2.0) * 0.5 + 0.5;
                    float t2 = sin(vPosition.y * 3.5 + uTime * 2.5) * 0.5 + 0.5;
                    float t3 = cos(vPosition.z * 3.0 + uTime * 1.8) * 0.5 + 0.5;
                    
                    // Mix colors
                    vec3 color1Mix = mix(uColor1, uColor2, t1);
                    vec3 color2Mix = mix(uColor3, uColor4, t2);
                    vec3 baseColor = mix(color1Mix, color2Mix, t3);
                    
                    // Dynamic highlight
                    float highlightPos = sin(uTime * 1.5) * 0.3;
                    float highlight = pow(max(0.0, (vNormal.y + highlightPos) * 0.5 + 0.5), 3.0) * 0.5;
                    
                    // Combine with fresnel edge glow
                    vec3 finalColor = baseColor + vec3(fresnel * 0.6) + vec3(highlight);
                    
                    // Pulsing brightness
                    float brightness = 1.0 + sin(uTime * 3.0) * 0.1;
                    finalColor *= brightness;
                    
                    // Inner glow
                    float innerGlow = 1.0 - fresnel * 0.25;
                    finalColor *= innerGlow;
                    
                    gl_FragColor = vec4(finalColor, 0.95);
                }
            `,
            transparent: true,
            side: THREE.DoubleSide,
        });
    }, []);

    useFrame((state) => {
        if (meshRef.current) {
            const time = state.clock.elapsedTime;
            meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.3;
            meshRef.current.rotation.y += 0.012;
            meshRef.current.rotation.z = Math.cos(time * 0.3) * 0.2;

            // Subtle scale pulsing for breathing effect
            const pulse = 1 + Math.sin(time * 2.5) * 0.02;
            meshRef.current.scale.setScalar(pulse);
        }
        shaderMaterial.uniforms.uTime.value = state.clock.elapsedTime * 1.2;
    });

    return (
        <mesh ref={meshRef} material={shaderMaterial}>
            <icosahedronGeometry args={[1.4, 64]} />
        </mesh>
    );
}

/**
 * ResponsiveCamera - Adjusts camera based on viewport size
 */
function ResponsiveCamera() {
    const { camera, size } = useThree();

    useEffect(() => {
        const minDimension = Math.min(size.width, size.height);

        let cameraZ: number;
        let fov: number;

        if (minDimension < 400) {
            cameraZ = 9;
            fov = 45;
        } else if (minDimension < 600) {
            cameraZ = 8.5;
            fov = 46;
        } else if (minDimension < 900) {
            cameraZ = 8;
            fov = 47;
        } else {
            cameraZ = 7;
            fov = 48;
        }

        camera.position.z = cameraZ;
        (camera as THREE.PerspectiveCamera).fov = fov;
        camera.updateProjectionMatrix();
    }, [camera, size.width, size.height]);

    return null;
}

/**
 * Bubble3DCanvas - Main exported component with Three.js Canvas
 */
export default function Bubble3DCanvas() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 50 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
                dpr={[1, 2]}
            >
                <ResponsiveCamera />

                {/* Lighting */}
                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
                <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
                <pointLight position={[5, -5, 10]} intensity={0.5} color="#ec4899" />
                <pointLight position={[-5, 5, -10]} intensity={0.3} color="#06b6d4" />

                <Bubble3D />
            </Canvas>
        </div>
    );
}

