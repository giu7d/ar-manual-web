import { rgba } from "polished";
import styled from "styled-components";

export const Label = styled.label<IDefaultStyledProps>`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
`;

export const Input = styled.input<IDefaultStyledProps>`
  margin: 4px 0;
  padding: 14px 24px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.foreground};
  border: 1px solid ${({ theme }) => theme.colors.foreground};
  border-radius: 8px;
`;
