import styled from "styled-components";

export const CardWrapper = styled.div`
  /* Screen larger than 640px? 2 column */
  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    width: 250px;
  }
  /* Screen larger than 900px? 3 columns */
  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    width: 300px;
  }
  width: 200px;

  padding: 30px;
`;

export const CardItem = styled.div`
  display: flex;
  cursor: pointer;
  width: 100%;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid rgba(32, 33, 37, 0.08);
  justify-content: center;
  text-align: center;
  img {
    border-radius: ${({ theme }) => theme.borderRadius};
  }
  a {
    text-decoration: none;
  }
`;
