import styled from "styled-components";
import { motion } from "framer-motion";
import { rgba } from "polished";

export const Wrapper = styled(motion.nav)<IDefaultStyledProps>`
  display: flex;
  flex-direction: row;

  .content {
    display: flex;
    flex: 1 1;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 24px 14px;
    overflow: hidden;

    button {
      margin-bottom: 14px;
    }
  }

  .divider {
    height: 90%;
    width: 2px;
    border-radius: 4px;
    align-self: center;
    background-color: ${({ theme }) => rgba(theme.colors.text, 0.05)};
  }
`;
