import styled from "styled-components";

import { ITheme } from "../../../theme";

interface IThemeProps {
  theme: ITheme;
}

export const IconButton = styled.button<IThemeProps>`
  width: 48px;
  height: 48px;
  border-radius: 54px;
  background-color: inherit;
  align-items: center;
  align-content: center;
`;
