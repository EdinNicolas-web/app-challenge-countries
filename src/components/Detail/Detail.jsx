import React, { useState, useEffect } from "react";

//params
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// services
import { getCountryByName } from "../../services/instance";

// styles
import {
  StyledDetailContainer,
  BackButton,
  GridContent,
  FlagContainer,
  TitleCountry,
  InfoContainer,
  RowText,
  LabelDescription,
  TextContent,
  BorderContainer,
  ItemBorderCountry,
} from "./Detail.style";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Detail = () => {
  const navigate = useNavigate();
  const { name_country } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    getCountryByName(name_country).then(({ data }) => {
      if (data) {
        setCountry(data[0]);
      }
    });
  }, []);

  return (
    <StyledDetailContainer>
      <BackButton onClick={() => navigate("/")}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <p>Back</p>
      </BackButton>
      <GridContent>
        <FlagContainer src={country?.flag} />
        <InfoContainer>
          <TitleCountry>{country?.name}</TitleCountry>
          <RowText>
            <LabelDescription>
              Native Name: <TextContent>{country.nativeName}</TextContent>
            </LabelDescription>
            <LabelDescription>
              Top Level Domain:{" "}
              {country?.topLevelDomain?.map((level, index) => (
                <TextContent key={`level-domain-${index}`}>{level}</TextContent>
              ))}
            </LabelDescription>
          </RowText>
          <RowText>
            <LabelDescription>
              Population:{" "}
              <TextContent>{country?.population?.toLocaleString()}</TextContent>
            </LabelDescription>
            <LabelDescription>
              Currencies:{" "}
              {country?.currencies?.map((currency, index) => (
                <TextContent
                  key={`currency-${index}`}
                >{`${currency.name}`}</TextContent>
              ))}
            </LabelDescription>
          </RowText>
          <RowText>
            <LabelDescription>
              Region: <TextContent>{country?.region}</TextContent>
            </LabelDescription>
            <LabelDescription>
              Languages:{" "}
              {country?.languages?.map((language, index) => (
                <TextContent
                  key={`language-${index}`}
                >{`${language.name} `}</TextContent>
              ))}
            </LabelDescription>
          </RowText>
          <RowText>
            <LabelDescription>
              Sub Region: <TextContent>{country?.subregion}</TextContent>
            </LabelDescription>
          </RowText>
          <RowText>
            <LabelDescription>
              Capital: <TextContent>{country?.capital}</TextContent>
            </LabelDescription>
          </RowText>
          <BorderContainer>
            <LabelDescription className="contentBorder">
              Border Countries:{" "}
              {country?.borders?.map((border, index) => (
                <ItemBorderCountry key={`border-country-${index}`}>
                  <p>{`${border}`}</p>
                </ItemBorderCountry>
              ))}
            </LabelDescription>
          </BorderContainer>
        </InfoContainer>
      </GridContent>
    </StyledDetailContainer>
  );
};

export default Detail;
