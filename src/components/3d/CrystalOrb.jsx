import {
    Float,
    MeshTransmissionMaterial,
} from "@react-three/drei";

function CrystalOrb() {
    return (
        <Float
            speed={1}
            rotationIntensity={0.08}
            floatIntensity={0.28}
        >
            <mesh rotation={[0.2, 0.3, 0.1]}>
                <icosahedronGeometry args={[1.55, 3]} />

                <MeshTransmissionMaterial
                    backside
                    samples={4}
                    resolution={512}
                    thickness={0.7}
                    roughness={0.12}
                    anisotropy={0.12}
                    chromaticAberration={0.03}
                    distortion={0.05}
                    distortionScale={0.14}
                    temporalDistortion={0.015}
                    transmission={1}
                    ior={1.45}
                    color="#e4e4ea"
                />
            </mesh>
        </Float>
    );
}

export default CrystalOrb;