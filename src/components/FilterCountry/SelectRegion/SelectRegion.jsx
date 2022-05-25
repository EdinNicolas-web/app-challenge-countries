import React from "react";

// styles
import { StyledSelect } from "./SelectRegion.style";

const SelectRegion = ({ setSelectedRegion }) => {
  return (
    <StyledSelect onChange={(e) => setSelectedRegion(e.target.value)}>
      <option value="">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="americas">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </StyledSelect>
  );
};

export default SelectRegion;
