import { Main } from "@/components/atoms/Layout.styled";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
