import styled from "styled-components";
import {
  space,
  color,
  layout,
  flexbox,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
} from "styled-system";

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Main = styled.main`
  display: flex;
  height: 100%;
  max-width: 960px;
  position: relative;
  padding-top: 100px;
  margin: 0px auto;
  flex-direction: column;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  /* Screen larger than 600px? 2 column */
  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Screen larger than 900px? 3 columns */
  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const VStack = styled.div<SpaceProps & FlexboxProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  ${flexbox}
`;

const HStack = styled.div<{ gap?: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: ${({ gap }) => gap};
`;

const Box = styled.div<SpaceProps & ColorProps & LayoutProps & FlexboxProps>`
  ${space}
  ${color}
  ${layout}
  ${flexbox}
`;

export { Centered, VStack, Box, HStack };
