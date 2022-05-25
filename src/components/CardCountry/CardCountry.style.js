import styled from "styled-components";

export const StyledCard = styled.div`
  background: ${({ theme }) => theme.colour.elements};
  border-radius: 10px;
  width: 100%;
  height: 300px;
  cursor: pointer;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const CardFlag = styled.img`
  width: 100%;
  height: 50%;
  border-radius: 10px 10px 0px 0px;
  object-fit: cover;
`;

export const ContainerInfo = styled.div`
  width: 100%;
  padding: 20px;
`;

export const TitleCountry = styled.h4`
  font-size: 18px;
  font-weight: 900;
  color: ${({ theme }) => theme.colour.fonts};
  margin-bottom: 10px;
`;

export const LabelItem = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colour.fonts};
  margin-bottom: 7px;
`;

export const TextItem = styled.span`
  font-size: 14px;
  font-weight: 300;
  color: ${({ theme }) => theme.colour.fonts};
`;
