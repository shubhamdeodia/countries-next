import { Main } from "@/components/atoms/Layout.styled";
import { Meta } from "@/components/molecules/Meta/Meta";
import Nav from "@/components/molecules/Nav/Nav";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Meta />
      <Nav />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
