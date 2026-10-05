import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import CrystalOrb from "./CrystalOrb";
import OrbitRings from "./OrbitRings";

function HeroScene() {
    return (
        <Canvas
            camera={{
                position: [0, 0, 5.8],
                fov: 42,
            }}
            dpr={[1, 1.5]}
            gl={{
                antialias: true,
                alpha: true,
                powerPreference: "high-performance",
            }}
        >
            {/* =================================
          BASE LIGHT
      ================================= */}

            <ambientLight intensity={0.16} />

            {/* =================================
          MAIN WHITE LIGHT
      ================================= */}

            <directionalLight
                position={[4, 5, 5]}
                intensity={2.5}
            />

            {/* =================================
          TOP HIGHLIGHT
      ================================= */}

            <pointLight
                position={[0, 4, 3]}
                intensity={5}
                distance={8}
            />

            {/* =================================
          LEFT CRYSTAL LIGHT
      ================================= */}

            <pointLight
                position={[-4, 1, 2]}
                intensity={6}
                distance={9}
            />

            {/* =================================
          INDIGO ACCENT
      ================================= */}

            <pointLight
                position={[3, -2, 1]}
                intensity={6}
                distance={8}
                color="#6366f1"
            />

            {/* =================================
          CRYSTAL
      ================================= */}

            <CrystalOrb />

            {/* =================================
          AETHER-X ORBITS
      ================================= */}

            <OrbitRings />

            {/* =================================
          STUDIO REFLECTIONS
      ================================= */}

            <Environment preset="studio" />
        </Canvas>
    );
}

export default HeroScene;