import { rgba } from "polished";
import styled from "styled-components";

interface IWrapperProps {
  background?: string;
  hasIcon?: boolean;
}

export const Wrapper = styled.div<IWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 8px;
  padding-left: ${({ hasIcon = false }) => (hasIcon ? 8 : 14)}px;
  padding-right: 14px;

  height: 38px;
  max-width: 200px;
  overflow: hidden;
  white-space: nowrap;

  gap: 14px;
  background-color: ${({ background, theme }) =>
    background || theme.colors.primary};
  color: #fff;
  font-size: 1.75rem;
  border-radius: 24px;

  & > .icon {
    display: flex;
    width: 24px;
    height: 24px;
    background-color: ${() => rgba("#FFF", 0.1)};
    color: #fff;
    border-radius: 24px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
