import styled from 'styled-components';

export const WhiteButton = styled.button`
  margin-right: 25px;
  color: var(--black-color);
  background-color: var(--white-color);
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 10px 35px;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  & p {
    padding-left: 5px;
  }
`;

export const BlueButton = styled.button`
  color: var(--white-color);
  background-color: var(--facebook-color);
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 10px 35px;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  & p {
    padding-left: 5px;
  }
`;
