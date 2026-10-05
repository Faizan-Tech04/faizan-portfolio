import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function OrbitRing({
    radius,
    tube,
    rotation,
    speed,
    opacity,
    axis = "y",
}) {
    const ringRef = useRef();

    useFrame((state, delta) => {
        if (!ringRef.current) return;

        const time = state.clock.getElapsedTime();

        // Main orbital rotation
        if (axis === "x") {
            ringRef.current.rotation.x += delta * speed;
        }

        if (axis === "y") {
            ringRef.current.rotation.y += delta * speed;
        }

        if (axis === "z") {
            ringRef.current.rotation.z += delta * speed;
        }

        // Very subtle secondary movement
        ringRef.current.position.y =
            Math.sin(time * 0.7 + radius) * 0.025;

        ringRef.current.position.x =
            Math.cos(time * 0.5 + radius) * 0.018;
    });

    return (
        <mesh
            ref={ringRef}
            rotation={rotation}
        >
            <torusGeometry
                args={[radius, tube, 20, 180]}
            />

            <meshStandardMaterial
                color="#dcdce3"
                metalness={1}
                roughness={0.16}
                transparent
                opacity={opacity}
            />
        </mesh>
    );
}

function OrbitRings() {
    return (
        <group>

            {/* =================================
          PRIMARY ORBIT
      ================================= */}

            <OrbitRing
                radius={2.05}
                tube={0.014}
                rotation={[Math.PI / 2.7, 0.15, 0]}
                speed={0.32}
                opacity={0.72}
                axis="y"
            />

            {/* =================================
          SECONDARY ORBIT
      ================================= */}

            <OrbitRing
                radius={1.85}
                tube={0.010}
                rotation={[0.45, Math.PI / 3.2, 0.7]}
                speed={-0.42}
                opacity={0.48}
                axis="x"
            />

            {/* =================================
          OUTER ORBIT
      ================================= */}

            <OrbitRing
                radius={2.3}
                tube={0.008}
                rotation={[1.15, 0.3, 0.25]}
                speed={0.18}
                opacity={0.28}
                axis="z"
            />

        </group>
    );
}

export default OrbitRings;