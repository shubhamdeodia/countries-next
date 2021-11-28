import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { Country } from "@/interface/Countries";
import CountriesList from "@/components/molecules/CountriesList/CountriesList";
import { Centered } from "@/components/atoms/Layout.styled";

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
