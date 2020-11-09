import React from "react";
import { observer } from "mobx-react-lite";

import { Wrapper } from "./styles";
import { useStores } from "../../../hooks/useStores";

export const SideBar = observer(() => {
  const { globalStore } = useStores();

  return (
    <Wrapper
      initial={{
        width: globalStore.navigationBar ? "80px" : "200px",
      }}
      animate={{
        width: globalStore.navigationBar ? "80px" : "200px",
      }}
    >
      <span>Sidebar</span>
    </Wrapper>
  );
});
