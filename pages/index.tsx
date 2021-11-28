import type { GetStaticProps, InferGetStaticPropsType } from "next";

import { IntialCountryData, Country } from "@/interface/Countries";
import CountriesList from "@/components/molecules/CountriesList/CountriesList";
import { Centered } from "@/components/atoms/Layout.styled";

export const getStaticProps: GetStaticProps<{
  countries: IntialCountryData[];
}> = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");

  const countriesResp: Country[] = await res.json();
  const countries = countriesResp.map((country) => ({
    flags: country.flags,
    name: country.name,
    population: country.population,
    cca3: country.cca3,
    capital:
      country.capital && country.capital.length > 0
        ? country.capital.join(", ")
        : "",
  }));

  return {
    props: {
      countries,
    },
  };
};

const Home = ({
  countries,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <section>
        <Centered>
          <CountriesList countries={countries} />
        </Centered>
      </section>
    </>
  );
};

export default Home;
