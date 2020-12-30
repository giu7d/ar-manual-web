import styled from "styled-components";
import { motion } from "framer-motion";

export const BackdropWrapper = styled(motion.div)`
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;

export const Wrapper = styled(motion.div)`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
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
    position: fixed;
    /* center the element */
    right: 0;
    left: 0;
    bottom: 24px;
    margin-right: auto;
    margin-left: auto;
    width: fit-content;
  }
`;
