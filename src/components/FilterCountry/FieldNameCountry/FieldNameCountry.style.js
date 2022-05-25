import styled from "styled-components";

export const StyledField = styled.div`
  width: 40%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;

  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 10px;
  }

  i {
    position: absolute;
    padding: 18px;
    color: ${({ theme }) => theme.colour.fonts};
    min-width: 50px;
    text-align: center;
  }

  input {
    width: 100%;
    padding: 10px;
    background: ${({ theme }) => theme.colour.elements};
    border: none;
    border-radius: 10px;
    height: 55px;
    padding-left: 40px;
    font-size: 16px;
    color: ${({ theme }) => theme.colour.fonts};
  }
`;
