/* eslint-disable import/no-extraneous-dependencies */
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { ComponentType, ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import theme from "@/theme/theme";

const Providers: ComponentType<{ children: ReactElement }> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const render = (ui: ReactElement, options?: RenderOptions) => {
  return rtlRender(ui, {
    wrapper: Providers,
    ...options,
  });
};

// re-export everything so that all testing-library functionality can be imported from one place
export * from "@testing-library/react";
export { render };
