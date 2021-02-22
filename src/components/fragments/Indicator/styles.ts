import styled from "styled-components";

interface IWrapperProps {
  color?: string;
}

export const Wrapper = styled.div<IWrapperProps>`
  display: flex;
  flex-direction: column;
  margin: 0 8px;
  padding: 14px;

  align-items: flex-start;
  justify-content: space-between;

  width: 150px;
  min-width: 150px;
  border-radius: ${({ theme }) => theme.roundness}px;

  background-color: ${({ theme, color }) => color || theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};

  :first-child {
    margin-left: 24px;
  }

  h3 {
    font-weight: 600;
    font-size: 2rem;
    opacity: 0.8;
  }

  p {
    display: flex;
    margin-top: 8px;
    flex: 1 1;
    align-items: center;
    font-size: 4rem;
    word-break: break-all;
    font-stretch: extra-expanded;
    text-transform: uppercase;
  }

  .small {
    font-size: 3rem !important;
  }
`;
