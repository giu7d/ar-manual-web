import { rgba } from "polished";
import styled from "styled-components";

interface INavigationButtonProps {
  selected?: boolean;
}

export const NavigationButton = styled.button<INavigationButtonProps>`
  display: flex;
  padding: 8px 14px;
  height: 48px;
  border-radius: 8px;
  align-items: center;
  justify-content: flex-start;

  font-size: 14px;
  font-weight: 600;

  span {
    margin-left: 14px;
  }

  ${({ theme, selected = false }) => {
    if (selected) {
      return `
        background-color: ${theme.colors.primary};
        color: ${theme.colors.background};
      `;
    }

    return `
        background-color: inherit;
        color: ${rgba(theme.colors.text, 0.75)};
      `;
  }};
`;
