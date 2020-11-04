import styled from "styled-components";

import { ITheme } from "../../../theme";

interface IThemeProps {
  theme: ITheme;
}

export const Wrapper = styled.section<IThemeProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 24px 0;

  @media only screen and (min-width: 760px) {
    flex-direction: row;
    flex-wrap: wrap;

    & > div {
      margin: 14px;
    }
  }
`;
