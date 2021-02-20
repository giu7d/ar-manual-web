import { rgba } from "polished";
import styled from "styled-components";

export const Label = styled.label`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${({ theme }) => rgba(theme.colors.text, 0.75)};
`;

export const Required = styled.span`
  font-size: 2rem;
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.danger};
`;

export const Input = styled.input`
  margin: 4px 0;
  padding: 14px 24px;
  font-size: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => rgba(theme.colors.text, 0.25)};
  border-radius: 8px;
  transition: all 200ms ease-in-out;

  &:focus {
    border: 1px solid ${({ theme }) => rgba(theme.colors.primary, 0.75)};
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
`;
