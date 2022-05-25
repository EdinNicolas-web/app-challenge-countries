import styled from "styled-components";

export const StyledDetailContainer = styled.section`
  background-color: ${({ theme }) => theme.colour.background};
  height: 90.25vh;
  padding: 80px;
  @media (max-width: 480px) {
    padding: 40px;
    height: 100%;
  }
`;

export const BackButton = styled.div`
  background: ${({ theme }) => theme.colour.elements};
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  margin-bottom: 50px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colour.fonts};
  cursor: pointer;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const GridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  @media (max-width: 480px) {
    column-gap: 0px;
    row-gap: 10px;
    grid-template-columns: inherit;
    grid-template-rows: 1fr;
  }
`;

export const FlagContainer = styled.img`
  width: 80%;
  height: 350px;
  object-fit: cover;
  @media (max-width: 480px) {
    width: 100%;
    height: 250px;
  }
`;

export const InfoContainer = styled.div`
  margin-top: 15px;
  padding-right: 20%;
`;

export const RowText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  text-align: start;
  @media (max-width: 480px) {
    display: block;
    margin-top: 0px;
  }
`;

export const TitleCountry = styled.h3`
  font-size: 32px;
  font-weight: 900;
  color: ${({ theme }) => theme.colour.fonts};
  margin-bottom: 40px;
`;

export const LabelDescription = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colour.fonts};
  margin-bottom: 7px;
  width: 100%;
  &.contentBorder {
    display: flex;
    gap: 10px;
    align-items: center;
    @media (max-width: 480px) {
      display: block;
    }
  }
`;

export const TextContent = styled.span`
  font-size: 14px;
  font-weight: 300;
  color: ${({ theme }) => theme.colour.fonts};
`;

export const BorderContainer = styled.div`
  margin-top: 45px;
`;

export const ItemBorderCountry = styled.div`
  width: 40px;
  height: 25px;
  color: ${({ theme }) => theme.colour.fonts};
  background: ${({ theme }) => theme.colour.elements};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;
