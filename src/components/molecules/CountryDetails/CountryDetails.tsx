import { BorderingCountry, Country } from "@/interface/Countries";

import {
  CountryDetailsContainer,
  CountryDetailsImageWrapper,
  CountryDetailsContentWrapper,
  CountryDetailsFooter,
  CountryDetailsFooterItem,
} from "./CountryDetails.styled";
import Image from "next/image";

import { Typography } from "@/components/atoms/Typography";

import { VStack } from "@/components/atoms/Layout.styled";
interface Props {
  country: Country;
  borderingCountry: BorderingCountry[] | [];
}

export const CountryDetails = ({ country, borderingCountry }: Props) => {
  return (
    <CountryDetailsContainer>
      <CountryDetailsImageWrapper>
        <Image
          src={country.flags.svg}
          height={400}
          width={400}
          quality={50}
          alt={`flag of ${country.name.common}`}
        />
      </CountryDetailsImageWrapper>
      <CountryDetailsContentWrapper>
        <Typography my={10} variant="header" as="header">
          {country.name.common}
        </Typography>
        <Typography my={10} variant="body" as="p">
          Capital: {country.capital}
        </Typography>
        <Typography my={10} variant="body" as="p">
          Population: {country.population}
        </Typography>
        <Typography my={10} variant="body" as="p">
          Currency:{" "}
          {country.currencies && Object.keys(country.currencies).join(", ")}
        </Typography>
        <Typography my={10} variant="body" as="p">
          Laguages:{" "}
          {country.languages && Object.values(country.languages).join(", ")}
        </Typography>
      </CountryDetailsContentWrapper>
      <VStack>
        <Typography my={10} variant="body" as="p">
          Bordering Countries
        </Typography>
        <CountryDetailsFooter>
          {borderingCountry?.map((borderCountry) => {
            return (
              <CountryDetailsFooterItem key={borderCountry.name.common}>
                <Image
                  src={borderCountry.flags.svg}
                  height="100%"
                  width="100%"
                  alt={`flag of ${borderCountry.name.common}`}
                />
                <VStack justifyContent="center">
                  <Typography my="5px" variant="accent" as="p">
                    {borderCountry.name.common}
                  </Typography>

                  <Typography my="5px" variant="accent" as="p">
                    Population : {borderCountry.population}
                  </Typography>
                </VStack>
              </CountryDetailsFooterItem>
            );
          })}
        </CountryDetailsFooter>
      </VStack>
    </CountryDetailsContainer>
  );
};
