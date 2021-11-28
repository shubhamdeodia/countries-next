import type { GetStaticProps, InferGetStaticPropsType } from "next";

import { Country } from "@/interface/Countries";
import CountriesList from "@/components/molecules/CountriesList/CountriesList";
import { Centered } from "@/components/atoms/Layout.styled";

export const getStaticProps: GetStaticProps<{ countries: Country[] }> =
  async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");

    const countries: Country[] = await res.json();

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
