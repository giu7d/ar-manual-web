import { useEffect, useRef } from "react";
import { extend, useFrame, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

export const OrbitCamera = () => {
  const { camera, gl, invalidate } = useThree();
  const ref = useRef();

  useFrame(() => ref.current.update());
  useEffect(() => void ref.current.addEventListener("change", invalidate));

  return (
    <orbitControls ref={ref} args={[camera, gl.domElement]} enableDamping />
  );
};
