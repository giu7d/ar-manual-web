import styled from "styled-components";

import { ITheme } from "../../../theme";

interface IThemeProps {
  theme: ITheme;
}

export const Wrapper = styled.section<IThemeProps>`
  display: flex;
  padding: 24px;
  width: 100%;
  max-width: 1000px;
  flex-direction: column;
  align-self: center;

  @media only screen and (min-width: 1500px) {
    max-width: 1200px;
  }
`;

export const ChartsWrapper = styled.section<IThemeProps>`
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
