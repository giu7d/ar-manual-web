import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import { Canvas } from "react-three-fiber";
import { GLTFModel } from "../components/container/3D/GLTFModel";
import { OrbitCamera } from "../components/container/3D/OrbitCamera";

export const RenderCanvas = () => {
  const params: { folder: string; file: string } = useParams();

  return (
    <Canvas
      style={{ flex: 1, backgroundColor: "#333" }}
      camera={{ position: [0, 6, 7] }}
      gl={{
        antialias: true,
        logarithmicDepthBuffer: true,
      }}
    >
      <OrbitCamera />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <GLTFModel {...params} />
      </Suspense>
    </Canvas>
  );
};
