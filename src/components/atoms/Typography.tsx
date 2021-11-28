import styled, { DefaultTheme } from "styled-components";
import theme from "@/theme/theme";
import {
  space,
  layout,
  typography,
  color,
  border,
  shadow,
  variant,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
  BorderProps,
  ShadowProps,
} from "styled-system";

type Props = SpaceProps &
  LayoutProps &
  TypographyProps &
  ColorProps &
  BorderProps &
  ShadowProps & {
    variant: keyof DefaultTheme["typography"];
  };

export const Typography = styled.p<Props>`
  ${variant({
    variants: { ...theme.typography },
  })};
  ${space};
  ${layout};
  ${typography};
  ${color};
  ${border};
  ${shadow};
`;
