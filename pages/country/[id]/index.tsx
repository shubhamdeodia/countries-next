import { InferGetStaticPropsType, GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import { Country } from "@/interface/Countries";
import { CountryDetails } from "@/components/molecules/CountryDetails/CountryDetails";

export const getStaticProps: GetStaticProps<
  {
    country: Country[];
  },
  { id: string }
> = async (context) => {
  const id = context.params?.id;

  const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);

  const country: Country[] = await res.json();

  return {
    props: {
      country,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");

  const countries: Country[] = await res.json();

  const paths = countries.map((country) => ({
    params: {
      id: country.cca3,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const CountriesDetails = ({
  country,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  const { id } = router.query;

  const selectedCountry = country[0];

  if (country && id) {
    return <CountryDetails country={selectedCountry} />;
  }

  return null;
};

export default CountriesDetails;
