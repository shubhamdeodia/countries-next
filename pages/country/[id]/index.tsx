import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/dist/client/router";
import { Country, BorderingCountry } from "@/interface/Countries";
import { Centered } from "@/components/atoms/Layout.styled";
import { Meta } from "@/components/molecules/Meta/Meta";
import dynamic from "next/dynamic";

const CountryDetails = dynamic(
  () => import("@/components/molecules/CountryDetails/CountryDetails")
);

// export const getServerSideProps: GetServerSideProps<
//   {
//     country: Country[];
//     borderingCountry: BorderingCountry[] | [];
//   },
//   { id: string }
// > = async (context) => {
//   const id = context.params?.id;
//   const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
//   const country: Country[] = await res.json();
//   let borderingCountry: BorderingCountry[] | [] = [];

//   if (country && country[0].borders && country[0].borders.length > 0) {
//     const borderCountryCode = country[0].borders.join(",");

//     if (borderCountryCode) {
//       const borderCountryRes = await fetch(
//         `https://restcountries.com/v3.1/alpha?codes=${borderCountryCode}`
//       );

//       const countryBorderData: Country[] = await borderCountryRes.json();

//       borderingCountry =
//         countryBorderData?.map((country) => ({
//           name: country.name,
//           flags: country.flags,
//           population: country.population,
//           cca3: country.cca3,
//         })) || [];
//     }
//   }
//   return {
//     props: {
//       country,
//       borderingCountry,
//     },
//   };
// };

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
          cca3: country.cca3,
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

const CountriesDetails = ({
  country,
  borderingCountry,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  const { id } = router.query;

  const selectedCountry = country[0];

  if (selectedCountry && id) {
    return (
      <>
        <Meta
          title={selectedCountry.name.common}
          keywords={
            selectedCountry.capital?.length > 0
              ? selectedCountry.capital.join(", ")
              : ""
          }
        />
        <Centered>
          <CountryDetails
            country={selectedCountry}
            borderingCountry={borderingCountry}
          />
        </Centered>
      </>
    );
  }

  return null;
};

export default CountriesDetails;
