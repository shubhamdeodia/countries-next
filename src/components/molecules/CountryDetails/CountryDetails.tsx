import { BorderingCountry, Country } from "@/interface/Countries";

import {
  CountryDetailsContainer,
  CountryDetailsImageWrapper,
  CountryDetailsContentWrapper,
  CountryDetailsFooter,
  CountryDetailsFooterItem,
} from "./CountryDetails.styled";
import Image from "next/image";
import Link from "next/link";

import { Typography } from "@/components/atoms/Typography";

import { VStack } from "@/components/atoms/Layout.styled";
import Button from "@/components/atoms/Button.styled";
interface Props {
  country: Country;
  borderingCountry: BorderingCountry[] | [];
}

const CountryDetails = ({ country, borderingCountry }: Props) => {
  return (
    <CountryDetailsContainer>
      <VStack>
        <Link href={`/`} scroll={false}>
          <a>
            <Button>
              <Typography m={0} variant="caption" as="p">
                Go Back
              </Typography>
            </Button>
          </a>
        </Link>
      </VStack>
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
          Capital:{" "}
          {country.capital && country.capital.length > 0
            ? country.capital.join(", ")
            : ""}
        </Typography>
        <Typography my={10} variant="body" as="p">
          Population: {country.population}
        </Typography>
        <Typography my={10} variant="body" as="p">
          {country.currencies &&
            `Currency: ${Object.keys(country.currencies).join(", ")}`}
        </Typography>
        <Typography my={10} variant="body" as="p">
          {country.languages &&
            `Laguages: ${Object.values(country.languages).join(", ")}`}
        </Typography>
      </CountryDetailsContentWrapper>
      <VStack>
        <Typography my={10} variant="body" as="p">
          Bordering Countries
        </Typography>
        <CountryDetailsFooter>
          {borderingCountry && borderingCountry.length > 0 ? (
            borderingCountry.map((borderCountry) => {
              return (
                <Link
                  key={borderCountry.name.common}
                  href={`/country/${borderCountry.cca3}`}
                >
                  <a>
                    <CountryDetailsFooterItem>
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
                  </a>
                </Link>
              );
            })
          ) : (
            <Typography my={10} variant="body" as="p">
              None
            </Typography>
          )}
        </CountryDetailsFooter>
      </VStack>
    </CountryDetailsContainer>
  );
};

export default CountryDetails;
