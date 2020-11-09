import React from "react";
import { observer } from "mobx-react-lite";
import { FiBarChart2, FiMenu } from "react-icons/fi";

import { AvatarButton } from "../../fragments/Buttons/AvatarButton";
import { IconButton } from "../../fragments/Buttons/IconButton";
import { useStores } from "../../../hooks/useStores";
import { Wrapper, Title } from "./styles";

export const AppBar = observer(() => {
  const { globalStore } = useStores();

  return (
    <Wrapper>
      <IconButton onClick={() => globalStore.toggleNavigationBar()}>
        <FiMenu size={24} />
      </IconButton>
      <Title>
        <FiBarChart2 className="icon" />
        Dashboard
      </Title>
      <AvatarButton onClick={() => {}}>G</AvatarButton>
    </Wrapper>
  );
});
