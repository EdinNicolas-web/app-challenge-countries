import React, { useState, useEffect } from "react";

// styles
import { StyledHome, ContainerFilters, ContainerGrid } from "./Home.style";

// services
import {
  getAllCountries,
  getCountriesByRegion,
  getCountryByName,
} from "../../services/instance";

// hooks
import useDebounce from "../../hooks/useDebounce";

// components
import CardCountry from "../CardCountry/CardCountry";
import SelectRegion from "../FilterCountry/SelectRegion/SelectRegion";
import FieldNameCountry from "../FilterCountry/FieldNameCountry/FieldNameCountry";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const debouncedCountry = useDebounce(searchCountry, 500);

  useEffect(() => {
    if (debouncedCountry !== "") {
      getCountryByName(debouncedCountry).then(({ data }) => {
        if (data && data.length > 0) {
          setCountries(data);
        }
      });
    } else if (selectedRegion === "") {
      getAllCountries().then(({ data }) => {
        if (data && data.length > 0) {
          setCountries(data);
        }
      });
    } else {
      getCountriesByRegion(selectedRegion).then(({ data }) => {
        if (data && data.length > 0) {
          setCountries(data);
        }
      });
    }
  }, [selectedRegion, debouncedCountry]);

  return (
    <StyledHome>
      <ContainerFilters>
        <FieldNameCountry setSearchCountry={setSearchCountry} />
        <SelectRegion setSelectedRegion={setSelectedRegion} />
      </ContainerFilters>
      <ContainerGrid>
        {countries &&
          countries.map((country, index) => (
            <CardCountry key={`item-country${index}`} info={country} />
          ))}
      </ContainerGrid>
    </StyledHome>
  );
};

export default Home;
