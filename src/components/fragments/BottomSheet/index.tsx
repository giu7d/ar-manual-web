import React, { useRef } from "react";

import { Wrapper } from "./styles";
import { PanInfo, useDragControls } from "framer-motion";

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

  const handleDrag = (event: any, info: PanInfo) => {
    if (info.offset.y > 10) {
      onClose();
    }
  };

  return (
    <Wrapper
      ref={wrapperRef}
      initial={{
        y: window.innerHeight,
        x:
          wrapperRef.current && window.innerWidth > 760
            ? -wrapperRef.current?.clientWidth / 2
            : 0,
      }}
      animate={{
        y: visible ? 0 : window.innerHeight,
        x:
          wrapperRef.current && window.innerWidth > 760
            ? -wrapperRef.current?.clientWidth / 2
            : 0,
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
