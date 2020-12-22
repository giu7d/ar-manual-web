import React, { useEffect, useMemo } from "react";
import { useFrame, useLoader } from "react-three-fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const BASE_URL = "https://storage.googleapis.com/ar-manual.appspot.com";

interface IGLTFModelProps {
  folder: string;
  file: string;
}

export const GLTFModel: React.FC<IGLTFModelProps> = ({ folder, file }) => {
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
