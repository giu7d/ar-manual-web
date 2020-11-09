import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { FiMenu } from "react-icons/fi";
import { useRouteMatch } from "react-router-dom";

import { AvatarButton } from "../../fragments/Buttons/AvatarButton";
import { IconButton } from "../../fragments/Buttons/IconButton";
import { useStores } from "../../../hooks/useStores";
import { Wrapper, Title } from "./styles";
import { pages } from "../../../routes/pages";
import { IconType } from "react-icons/lib";

export const AppBar = observer(() => {
  const [page, setPage] = useState<{ icon: IconType; title: string }>();
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
      <Title>
        {page?.icon({ className: "icon" })}
        {page?.title}
      </Title>
      <AvatarButton onClick={() => {}}>G</AvatarButton>
    </Wrapper>
  );
});
