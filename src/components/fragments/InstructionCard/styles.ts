import { rgba } from "polished";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  min-width: 100%;

  .actions {
    display: none;
  }

  &:hover > .actions {
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 0;

    button {
      font-size: 2rem;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  padding: 14px;
  background-color: ${({ theme }) => theme.colors.background};

  border-radius: ${({ theme }) => theme.roundness}px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  & > .content {
    display: flex;
    flex-direction: column;
    gap: 8px;

    small {
      font-size: 1.75rem;
      color: ${({ theme }) => rgba(theme.colors.text, 0.5)};
    }

    .title {
      font-size: 3rem;
      font-weight: 600;
      text-transform: capitalize;
      color: ${({ theme }) => theme.colors.text};
    }

    .description {
      display: flex;
      flex-direction: column;
      font-size: 2rem;
      max-height: 54px;
      overflow: hidden;
      color: ${({ theme }) => theme.colors.text};
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.65) 60%,
        rgba(0, 0, 0, 0)
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  & > .footer {
    display: flex;
    flex-direction: row;
    margin-top: 14px;
    align-items: flex-end;
    justify-content: space-between;

    button {
      font-size: 2rem;
      color: ${({ theme }) => rgba(theme.colors.text, 0.75)};
    }

    .badges {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin: 8px 0;

      gap: 4px;
    }
  }
`;
