import { rgba } from "polished";
import styled from "styled-components";

interface IWrapperProps {
  background?: string;
}

export const Wrapper = styled.div<IWrapperProps>`
  display: flex;
  width: fit-content;
  padding: 8px;
  padding-right: 14px;
  gap: 14px;
  background-color: ${({ background, theme }) =>
    background || theme.colors.primary};
  color: #fff;
  font-size: 1.75rem;
  border-radius: 24px;
  align-items: center;
  justify-content: center;

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
