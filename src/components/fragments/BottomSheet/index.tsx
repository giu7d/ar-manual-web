import React, { useRef } from "react";

import { Wrapper } from "./styles";
import { PanInfo, useDragControls } from "framer-motion";
import { useWindowSize } from "../../../hooks/useWindowResize";

interface IBottomSheetProps {
  visible?: boolean;
  onClose?: () => void;
}

export const BottomSheet: React.FC<IBottomSheetProps> = ({
  children,
  visible = false,
  onClose = () => {},
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dragControls = useDragControls();
  const windowSize = useWindowSize();

  const handleDrag = (event: any, info: PanInfo) => {
    if (info.offset.y > 10) {
      onClose();
    }
  };

  return (
    <Wrapper
      ref={wrapperRef}
      initial={{
        y: visible ? 0 : windowSize.height,
        x: 0,
        translateX: "-50%",
      }}
      animate={{
        y: visible ? 0 : windowSize.height,
        x: 0,
        translateX: "-50%",
      }}
      transition={{ bounceStiffness: 600, bounceDamping: 10 }}
      drag="y"
      dragConstraints={wrapperRef}
      dragControls={dragControls}
      dragElastic={0.3}
      onDragEnd={handleDrag}
    >
      <div className="divider" onClick={onClose} />
      <div className="container">{children}</div>
    </Wrapper>
  );
};
