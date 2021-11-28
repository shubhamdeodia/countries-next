import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  width: 150px;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    width: 130px;
  }

  width: 80px;
`;

export default Button;
