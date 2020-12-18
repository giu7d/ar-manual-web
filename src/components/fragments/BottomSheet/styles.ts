import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)<IDefaultStyledProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 0 14px;
  border-radius: 14px;
  bottom: 0;
  z-index: 99;

  & > .divider {
    margin: 14px;
    width: 50px;
    height: 4px;
    border-radius: 14px;
    background-color: ${({ theme }) => theme.colors.foreground};
    cursor: grab;
  }

  & > .container {
    display: flex;
    flex-direction: column;
    padding: 14px;
    max-height: 90vh;
    overflow: auto;
  }

  @media only screen and (min-width: 760px) {
    display: flex;
    width: fit-content;
    max-width: 80%;

    align-self: center;
    justify-self: center;

    left: 25%;
    bottom: 24px;
  }
`;
