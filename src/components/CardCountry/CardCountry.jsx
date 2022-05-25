import React from "react";

//naviagator
import { useNavigate } from "react-router-dom";

//styles
import {
  StyledCard,
  CardFlag,
  ContainerInfo,
  TitleCountry,
  LabelItem,
  TextItem,
} from "./CardCountry.style";
const CardCountry = ({ info }) => {
  const navigate = useNavigate();
  return (
    <StyledCard onClick={() => navigate(`/detail/${info.name}`)}>
      <CardFlag src={info.flag} />
      <ContainerInfo>
        <TitleCountry>{info.name}</TitleCountry>
        <LabelItem>
          Population: <TextItem>{info.population.toLocaleString()}</TextItem>
        </LabelItem>
        <LabelItem>
          Region: <TextItem>{info.region}</TextItem>
        </LabelItem>
        <LabelItem>
          Capital: <TextItem>{info.capital}</TextItem>
        </LabelItem>
      </ContainerInfo>
    </StyledCard>
  );
};

export default CardCountry;
