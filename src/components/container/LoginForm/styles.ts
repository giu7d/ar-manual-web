import { rgba } from "polished";
import styled from "styled-components";

export const Wrapper = styled.section<IDefaultStyledProps>`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: ${({ theme }) => theme.roundness}px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.background};
  min-width: 300px;
  width: 350px;

  & > .header {
    margin-bottom: 24px;
    font-weight: 600;
    font-size: 3rem;
    text-align: center;
  }
`;

export const FormWrapper = styled.form<IDefaultStyledProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > h3 {
    margin: 14px 0;
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => rgba(theme.colors.text, 0.75)};
  }

  & > .section {
    margin: 14px;
  }

  & > .actions {
    margin-top: 14px;
    align-items: center;
    justify-content: center;
  }
`;
