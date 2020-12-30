import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  margin: 24px auto;
  padding: 24px;
  gap: 14px;
  max-width: 450px;
  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.foreground};

  justify-self: center;

  align-items: center;

  .content {
    display: flex;
    flex-direction: column;
    gap: 8px;

    h4 {
      font-weight: 600;
      font-size: 18px;
      opacity: 0.75;
    }

    p {
      font-size: 14px;
      opacity: 0.75;
    }
  }
`;
