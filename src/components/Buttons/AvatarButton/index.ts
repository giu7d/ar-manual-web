import styled from "styled-components";
import { rgba } from "polished";

import { IconButton } from "../IconButton";
import { ITheme } from "../../../theme";

interface IThemeProps {
  theme: ITheme;
}

export const AvatarButton = styled(IconButton)<IThemeProps>`
  font-weight: bold;
  color: ${({ theme }) => rgba(theme.colors.text, 0.75)};
  background-color: ${({ theme }) => rgba(theme.colors.foreground, 1)};

  ::after {
    content: "";
    position: absolute;
    top: 24px;
    right: 24px;
    z-index: 5;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background-color: ${({ theme }) => rgba(theme.colors.danger, 1)};
  }
`;
