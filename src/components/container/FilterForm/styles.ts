import { rgba } from "polished";
import styled from "styled-components";

export const FormWrapper = styled.form<IDefaultStyledProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  h3 {
    margin: 14px 0;
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => rgba(theme.colors.text, 0.75)};
  }

  .section {
    margin: 14px;
  }

  @media only screen and (min-width: 760px) {
    flex-direction: row;

    .section {
      margin: 0 14px;
    }
  }
`;

export const FormInput = styled.div<IDefaultStyledProps>`
  display: flex;
  flex-direction: column;
  margin: 8px 0;
`;

export const ActionWrapper = styled.div<IDefaultStyledProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 24px;

  button {
    margin-left: 8px;
    min-width: 150px;
    align-items: center;
    justify-content: center;
  }
`;
