import {
    Float,
    MeshTransmissionMaterial,
} from "@react-three/drei";

function CrystalOrb() {
    return (
        <Float
            speed={1.2}
            rotationIntensity={0.12}
            floatIntensity={0.35}
        >
            <mesh rotation={[0.2, 0.3, 0.1]}>
                <icosahedronGeometry args={[1.55, 4]} />

                <MeshTransmissionMaterial
                    backside
                    samples={8}
                    resolution={1024}
                    thickness={0.85}
                    roughness={0.10}
                    anisotropy={0.18}
                    chromaticAberration={0.045}
                    distortion={0.08}
                    distortionScale={0.22}
                    temporalDistortion={0.025}
                    transmission={1}
                    ior={1.45}
                    color="#e4e4ea"
                />
            </mesh>
        </Float>
    );
}

export default CrystalOrb;