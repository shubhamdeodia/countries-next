import styled from "styled-components";

export const CountryDetailsImageWrapper = styled.figure`
  display: flex;
  justify-content: flex-start;
  margin: 0;
  /* Screen larger than 640px? 2 column */
  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    max-width: 400px;
  }

  /* Screen larger than 900px? 3 columns */
  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    max-width: 400px;
  }
  max-width: 300px;
`;

export const CountryDetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 50px;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.white};
  gap: 30px;
  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    justify-content: flex-start;
  }

  justify-content: center;
`;

export const CountryDetailsFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
  }
`;

export const CountryDetailsItem = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const CountryDetailsContentWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: column;
`;

export const CountryDetailsFooterItem = styled.div`
  display: flex;
  justify-content: flex-start;
  height: auto;
  gap: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid rgba(32, 33, 37, 0.08);
`;
