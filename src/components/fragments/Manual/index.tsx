import React from "react";
import {
  FiCopy,
  FiExternalLink,
  FiMoreVertical,
  FiTrash2,
} from "react-icons/fi";
import { AiOutlineQrcode } from "react-icons/ai";
import { IconButton } from "../Buttons/IconButton";
import { Wrapper, ContentWrapper } from "./styles";
import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
interface IManualProps {
  componentSeries: string;
  thumbnailSrc: string;
  onOpenQRCode?: () => void;
  onOpenManual?: () => void;
  onDuplicate?: () => void;
  onRemove?: () => void;
}

export const Manual: React.FC<IManualProps> = ({
  componentSeries,
  thumbnailSrc,
  onOpenQRCode = () => {},
  onOpenManual = () => {},
  onDuplicate = () => {},
  onRemove = () => {},
}) => {
  return (
    <Wrapper>
      <div className="cover">
        <img
          src={thumbnailSrc}
          alt={`manual for component ${componentSeries} `}
        />
      </div>
      <ContentWrapper>
        <div className="content">
          <small>Component</small>
          <h3>{componentSeries}</h3>
        </div>
        <div className="actions">
          <IconButton onClick={onOpenManual}>
            <FiExternalLink size={24} />
          </IconButton>
          <Menu
            menuButton={
              <IconButton>
                <FiMoreVertical size={24} />
              </IconButton>
            }
          >
            <MenuItem onClick={onOpenQRCode} className="item">
              <AiOutlineQrcode size={24} />
              <span>QR Code</span>
            </MenuItem>
            <MenuItem onClick={onDuplicate} className="item">
              <FiCopy size={24} />
              <span>Duplicate</span>
            </MenuItem>
            <MenuItem onClick={onRemove} className="item danger">
              <FiTrash2 size={24} />
              <span>Delete</span>
            </MenuItem>
          </Menu>
        </div>
      </ContentWrapper>
    </Wrapper>
  );
};
