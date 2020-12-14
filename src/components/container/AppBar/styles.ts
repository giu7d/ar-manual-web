import styled from "styled-components";
import { rgba } from "polished";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 24px;
  align-items: center;
  justify-content: space-between;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 1rem;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;

  @media only screen and (min-width: 760px) {
    justify-content: flex-start;
    margin-left: 24px;
  }

  .icon {
    font-size: 3rem;
    color: ${({ theme }) => rgba(theme.colors.primary, 1)};
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 2.5rem;
  color: ${({ theme }) => rgba(theme.colors.text, 1)};
`;

export const SubTitle = styled.h2`
  font-weight: 600;
  font-size: 2rem;
  color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
`;
