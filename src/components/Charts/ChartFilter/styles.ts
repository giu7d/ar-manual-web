import { rgba } from "polished";
import styled from "styled-components";

import { ITheme } from "../../../theme";

interface IThemeProps {
  theme: ITheme;
}

export const Wrapper = styled.div<IThemeProps>`
  display: flex;
  flex-direction: row;
  align-items: center;

  .icon {
    font-size: 24px;
    color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
  }

  .filter {
    margin: 0 14px;

    h4 {
      font-size: 1.5rem;
      font-weight: bold;
      color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
    }

    p {
      font-size: 2rem;
      font-weight: bold;
      color: ${({ theme }) => rgba(theme.colors.text, 0.75)};
    }
  }
`;
