import styled from "styled-components";

export const CountryDetailsImageWrapper = styled.figure`
  /* Screen larger than 640px? 2 column */
  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    max-width: 300px;
  }

  /* Screen larger than 900px? 3 columns */
  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    max-width: 300px;
  }
  max-width: 200px;
`;

export const CountryDetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const CountryDetailsContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

//  /* Screen larger than 640px? 2 column */
//  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
//     max-width: 300px;
//   }

//   /* Screen larger than 900px? 3 columns */
//   @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
//     max-width: 300px;
//   }
//   max-width: 200px;
