import styled from "styled-components";

export const Wrapper = styled.div<IDefaultStyledProps>`
  display: flex;
  flex-direction: column;
  margin: 8px 0;

  & > label {
    margin-bottom: 8px;
  }
`;
