import styled from "styled-components";

export const NavStyled = styled.nav`
  height: 50px;
  padding: 10px;
  background: #000;
  color: #fff;
  display: flex;
  width: 100%;
  position: fixed;
  align-items: center;
  z-index: 999;
  justify-content: flex-start;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }

  ul li a {
    color: #fff;
    margin: 5px 15px;
    text-decoration: none;
  }
`;

export default NavStyled;
