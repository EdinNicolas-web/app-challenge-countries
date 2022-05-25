import styled from "styled-components";

export const StyledHome = styled.section`
  padding: 40px 80px;
  background: ${({ theme }) => theme.colour.background};
  width: 100%;
  min-height: 90vh;
  @media (max-width: 480px) {
    padding: 20px 40px;
  }
`;

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  @media (max-width: 480px) {
    grid-template-columns: inherit;
    grid-template-rows: repeat(1, 1fr);
  }
`;

export const ContainerFilters = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 480px) {
    display: block;
  }
`;
