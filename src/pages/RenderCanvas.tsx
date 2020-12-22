import React, { Suspense, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const BASE_URL = "https://storage.googleapis.com/ar-manual.appspot.com";

interface IGLTFModelProps {
  folder: string;
  file: string;
}

const GLTFModel: React.FC<IGLTFModelProps> = ({ folder, file }) => {
  const mesh = useLoader(GLTFLoader, `${BASE_URL}/${folder}/${file}`);
  const mixer = useMemo(() => new THREE.AnimationMixer(mesh.scene), [mesh]);
  const clips = useMemo(() => mesh.animations, [mesh]);

  useEffect(() => {
    if (clips && mixer && mesh) {
      clips.forEach((clip) => mixer.clipAction(clip).setDuration(5).play());
    }
  }, [mesh, clips, mixer]);

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return (
    <mesh position={[0, 0, 0]}>
      <primitive object={mesh.scene} />
    </mesh>
  );
};

export const RenderCanvas = () => {
  const params: { folder: string; file: string } = useParams();

  return (
    <Canvas
      style={{ flex: 1 }}
      camera={{ position: [0, 6, 7], near: 5, far: 15 }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <GLTFModel {...params} />
      </Suspense>
    </Canvas>
  );
};
