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

export const ChartsWrapper = styled.section<IThemeProps>`
  display: flex;
  padding: 24px;
  width: 100%;
  max-width: 900px;
  flex-direction: column;
  align-self: center;
`;

export const ChardsFlexWrapper = styled.section<IThemeProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (min-width: 760px) {
    display: grid;
    grid-template-columns: repeat(2, 400px);
  }
`;
