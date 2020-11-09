import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)<IDefaultStyledProps>`
  display: flex;
  min-width: 0;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.foreground};
  padding: 14px;
`;
