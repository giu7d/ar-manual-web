import { rgba } from "polished";
import styled from "styled-components";

import { ITheme } from "../../../theme";

interface IWrapperProps {
  theme: ITheme;
}
export const Wrapper = styled.div<IWrapperProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 24px;
  border-radius: ${({ theme }) => theme.roundness}px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  .header {
    margin: 24px 14px;
    font-weight: 600;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.text};
  }

  .header small {
    font-weight: 600;
    font-size: 2rem;
    color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
  }

  .content {
    margin: 0 14px 24px 14px;
  }
`;
