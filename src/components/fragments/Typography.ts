import { rgba } from "polished";
import styled from "styled-components";

const Title = styled.h3`
  font-weight: 600;
  font-size: 3rem;
  color: ${({ theme }) => rgba(theme.colors.text, 0.75)};
`;

const SubTitle = styled.p`
  font-size: 1.75rem;
  color: ${({ theme }) => rgba(theme.colors.text, 0.75)};
`;

export const Typography = {
  Title,
  SubTitle,
};
