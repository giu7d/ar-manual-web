import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { FiMenu } from "react-icons/fi";
import { useRouteMatch } from "react-router-dom";

import { AvatarButton } from "../../fragments/Buttons/AvatarButton";
import { IconButton } from "../../fragments/Buttons/IconButton";
import { useStores } from "../../../hooks/useStores";
import { Wrapper, Title, SubTitle, TitleWrapper } from "./styles";
import { pages } from "../../../routes/pages";
import { IconType } from "react-icons/lib";

export const AppBar = observer(() => {
  const [page, setPage] = useState<{
    icon: IconType;
    title: string;
    subtitle?: string;
  }>();
  const { globalStore } = useStores();
  const { path } = useRouteMatch();

  useEffect(() => {
    const matchPage = pages.find(({ route }) => path === route);

    setPage(matchPage);
  }, [path]);

  return (
    <Wrapper>
      <IconButton onClick={() => globalStore.toggleNavigationBar()}>
        <FiMenu size={24} />
      </IconButton>
      <TitleWrapper>
        {page?.icon({ className: "icon" })}
        <Title>{page?.title}</Title>
        {page?.subtitle && <SubTitle>{page.subtitle}</SubTitle>}
      </TitleWrapper>
      <AvatarButton onClick={() => {}}>G</AvatarButton>
    </Wrapper>
  );
});