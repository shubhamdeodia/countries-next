// styled.d.ts
import "styled-components";

interface IColor {
  text: string;
  background: string;
  accent: string;
  black: string;
  white: string;
}

interface ITypograhpy {
  fontFamily: string;
  color?: string;
  fontSize: string | Array<number>;
  fontWeight: number;
}

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    breakpoints: Array<string>;
    space: Array<number>;
    fontSizes: Array<number>;
    fontWeights: Array<number>;
    colors: IColor;
    typography: {
      body: ITypograhpy;
      header: ITypograhpy;
      caption: ITypograhpy;
      accent: ITypograhpy;
    };
  }
}
