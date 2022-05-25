import styled from "styled-components";

export const StyledSelect = styled.select`
  width: 15em;
  height: 55px;
  background: ${({ theme }) => theme.colour.elements};
  border-radius: 10px;
  color: ${({ theme }) => theme.colour.fonts};
  padding: 10px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 10px;
    margin-left: 0px; 
  }

  option {
    color: ${({ theme }) => theme.colour.fonts};
    background: ${({ theme }) => theme.colour.elements};
    display: flex;
    white-space: pre;
    min-height: 40px;
    padding: 20px 20px 1px;
    border: none;
  }
`;
