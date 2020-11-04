import styled from "styled-components";

import { ITheme } from "../../theme";

interface IThemeProps {
  theme: ITheme;
}

export const Wrapper = styled.main<IThemeProps>`
  display: flex;
  flex-direction: column;
  flex: 1 1;
`;
