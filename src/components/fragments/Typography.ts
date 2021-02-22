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

const SectionTitle = styled.h4`
  font-weight: 600;
  font-size: 2.25rem;
  color: ${({ theme }) => rgba(theme.colors.text, 0.75)};
`;

const Warning = styled.p`
  font-size: 1.75rem;
  color: ${({ theme }) => rgba(theme.colors.info, 0.75)};

  &::before {
    content: "*";
  }
`;

export const Typography = {
  Title,
  SubTitle,
  SectionTitle,
  Warning,
};
