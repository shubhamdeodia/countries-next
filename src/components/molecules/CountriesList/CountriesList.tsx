import { Typography } from "@/components/atoms/Typography";
import { Country } from "@/interface/Countries";
import Image from "next/image";
import { Card } from "@/components/molecules/Card/Card";
import Link from "next/link";
import { GridContainer } from "@/components/atoms/Layout.styled";
import { ImageContainer } from "./CountriesList.styled";

interface CountriesListProps {
  countries: Country[];
}

const CountriesList = ({ countries }: CountriesListProps) => {
  return (
    <GridContainer>
      {countries.map((country) => {
        return (
          <Card key={country.cca3}>
            <Link href={`/country/${country.cca3}`}>
              <a>
                <ImageContainer>
                  <Image
                    src={country.flags.svg}
                    quality={20}
                    height="150"
                    width="300"
                    placeholder="empty"
                    layout="responsive"
                    alt={`flag of ${country.name.common}`}
                  />
                </ImageContainer>

                <article>
                  <Typography variant="header" as="h2">
                    {country.name.common}
                  </Typography>
                  <Typography variant="caption" as="p">
                    Capital : {country.name.common}
                  </Typography>
                  <Typography variant="caption" as="p">
                    Population: {country.population}
                  </Typography>
                </article>
              </a>
            </Link>
          </Card>
        );
      })}
    </GridContainer>
  );
};

export default CountriesList;
