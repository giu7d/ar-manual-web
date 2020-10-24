import React from "react";
import { FiBarChart2, FiMenu } from "react-icons/fi";
import { AvatarButton } from "../Buttons/AvatarButton";
import { IconButton } from "../Buttons/IconButton";

import { Wrapper, Title } from "./styles";

interface IProps {}

export const AppBar: React.FC<IProps> = (props) => {
  return (
    <Wrapper>
      <IconButton onClick={() => {}}>
        <FiMenu size={24} />
      </IconButton>
      <Title>
        <FiBarChart2 className="icon" />
        Dashboard
      </Title>
      <AvatarButton onClick={() => {}}>G</AvatarButton>
    </Wrapper>
  );
};
