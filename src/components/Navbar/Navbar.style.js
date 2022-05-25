import styled from "styled-components";

export const StyledNavbar = styled.nav`
  background: ${({ theme }) => theme.colour.elements};
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colour.fonts};
  padding: 0px 80px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  @media (max-width: 480px) {
    padding: 0px 40px;
  }
  p {
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
  h2 {
    @media (max-width: 480px) {
      font-size: 18px;
    }
  }
`;
