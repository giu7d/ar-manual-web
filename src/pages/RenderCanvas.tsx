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
      camera={{ position: [-50, 50, -50] }}
      gl={{
        precision: "lowp",
      }}
      concurrent
    >
      <OrbitCamera />
      <ambientLight />
      <spotLight position={[-100, -100, -100]} color="#eaeaff" />
      <spotLight position={[-100, 100, -100]} color="#e4d1d1" />
      <spotLight position={[100, 100, 100]} color="#f5f5de" />
      <Suspense fallback={null}>
        <GLTFModel {...params} />
      </Suspense>
    </Canvas>
  );
};
