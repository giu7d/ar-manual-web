import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.nav)<IDefaultStyledProps>`
  display: flex;
  min-width: 0;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.foreground};
  padding: 24px 14px;
  overflow: hidden;

  button {
    margin-bottom: 14px;
  }
`;
