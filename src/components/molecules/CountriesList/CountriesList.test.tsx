import { IntialCountryData } from "@/interface/Countries";
import { render, screen } from "../../../../utils/test-utils";
import CountriesList from "./CountriesList";

const mockCountriesData: IntialCountryData[] = [
  {
    population: 1380004385,
    cca3: "IND",
    capital: "Delhi",
    flags: {
      png: "https://flagcdn.com/w320/in.png",
      svg: "https://flagcdn.com/in.svg",
    },
    name: {
      common: "India",
      official: "Republic of India",
      nativeName: {
        eng: {
          official: "Republic of India",
          common: "India",
        },
        hin: {
          official: "भारत गणराज्य",
          common: "भारत",
        },
        tam: {
          official: "இந்தியக் குடியரசு",
          common: "இந்தியா",
        },
      },
    },
  },
];

describe("CountriesList", () => {
  it("renders a country list", () => {
    render(<CountriesList countries={mockCountriesData} />);

    expect(
      screen.getByText(mockCountriesData[0].name.common)
    ).toBeInTheDocument();
    expect(screen.getByText(mockCountriesData[0].capital)).toBeInTheDocument();
    expect(
      screen.getByText(mockCountriesData[0].population)
    ).toBeInTheDocument();
  });
});
