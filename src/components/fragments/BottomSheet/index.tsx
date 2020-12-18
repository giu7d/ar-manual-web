import React, { useRef } from "react";

import { Wrapper } from "./styles";
import { PanInfo, useDragControls, AnimatePresence } from "framer-motion";

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
    <AnimatePresence>
      {visible && (
        <Wrapper
          ref={wrapperRef}
          initial={{
            y: window.innerHeight,
          }}
          animate={{
            y: 0,
          }}
          exit={{
            y: window.innerHeight,
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
      )}
    </AnimatePresence>
  );
};
