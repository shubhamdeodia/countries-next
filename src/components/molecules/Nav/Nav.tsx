import Link from "next/link";
import NavStyled from "./Nav.styled";

const Nav = () => {
  return (
    <NavStyled>
      <ul>
        <li>
          <Link href="/" scroll={false}>
            Home
          </Link>
        </li>
      </ul>
    </NavStyled>
  );
};

export default Nav;
