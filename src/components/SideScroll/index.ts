import styled from "styled-components";

import { ITheme } from "../../theme";

interface IThemeProps {
  theme: ITheme;
}
export const SideScroll = styled.div<IThemeProps>`
  display: flex;
  margin: 24px 0;
  flex-direction: row;
  max-width: 100%;
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;
