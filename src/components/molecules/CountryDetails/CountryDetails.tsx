import { Country } from "@/interface/Countries";

import {
  CountryDetailsContainer,
  CountryDetailsImageWrapper,
  CountryDetailsContentWrapper,
} from "./CountryDetails.styled";
import Image from "next/image";
interface Props {
  country: Country;
}

export const CountryDetails = ({ country }: Props) => {
  console.log(country);
  return (
    <CountryDetailsContainer>
      <CountryDetailsImageWrapper>
        <Image
          src={country.flags.svg}
          height={400}
          width={400}
          alt={`flag of ${country.name.common}`}
        />
      </CountryDetailsImageWrapper>
      <CountryDetailsContentWrapper>
        <div>Hey</div>
        <div>Hey</div>
        <div>Hey</div>
        <div>Hey</div>
        <div>Hey</div>
      </CountryDetailsContentWrapper>
    </CountryDetailsContainer>
  );
};
