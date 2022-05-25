import React from "react";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { StyledField } from "./FieldNameCountry.style";

const FieldNameCountry = ({ setSearchCountry }) => {
  return (
    <StyledField>
      <i>
        <FontAwesomeIcon icon={faSearch} />
      </i>
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => setSearchCountry(e.target.value)}
      />
    </StyledField>
  );
};

export default FieldNameCountry;
