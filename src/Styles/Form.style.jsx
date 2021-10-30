import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledFormLabelInputBox = styled.div`
  margin-bottom: 10px;
`;
export const StyledLabel = styled.label`
  font-size: 18px;
`;

export const StyledInputBox = styled.div`
  margin-top: 5px;
  padding: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  width: 95%;
  padding: 0 15px;
  &[type='submit'] {
    margin-top: 20px;
    background-color: var(--primary-color);
    color: var(--white-color);
    font-weight: 600;
    width: 100%;
    padding: 10px;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`;

export const StyledErrorMessage = styled.p`
  color: red;
`;
