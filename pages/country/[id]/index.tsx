import { InferGetStaticPropsType, GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import { Country, BorderingCountry } from "@/interface/Countries";
import { CountryDetails } from "@/components/molecules/CountryDetails/CountryDetails";
import { Centered } from "@/components/atoms/Layout.styled";

export const getStaticProps: GetStaticProps<
  {
    country: Country[];
    borderingCountry: BorderingCountry[] | [];
  },
  { id: string }
> = async (context) => {
  const id = context.params?.id;

  const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);

  const country: Country[] = await res.json();

  let borderingCountry: BorderingCountry[] | [] = [];

  if (country && country[0].borders && country[0].borders.length > 0) {
    const borderCountryCode = country[0].borders.join(",");

    if (borderCountryCode) {
      const borderCountryRes = await fetch(
        `https://restcountries.com/v3.1/alpha?codes=${borderCountryCode}`
      );
      const countryBorderData: Country[] = await borderCountryRes.json();

      borderingCountry =
        countryBorderData?.map((country) => ({
          name: country.name,
          flags: country.flags,
          population: country.population,
        })) || [];
    }
  }

  return {
    props: {
      country,
      borderingCountry,
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
  borderingCountry,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  const { id } = router.query;

  const selectedCountry = country[0];

  if (country && id) {
    return (
      <Centered>
        <CountryDetails
          country={selectedCountry}
          borderingCountry={borderingCountry}
        />
      </Centered>
    );
  }

  return null;
};

export default CountriesDetails;
