import React from 'react';
// Form validation render
import FormValidation from './FormValidation';
// Icons
import { FaRegUser } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { RiLock2Line } from 'react-icons/ri';
import { IoMdAlert } from 'react-icons/io';
import { AiOutlineCheckCircle } from 'react-icons/ai';
// Style
import {
  StyledForm,
  StyledFormLabelInputBox,
  StyledLabel,
  StyledInputBox,
  StyledInput,
  StyledErrorMessage,
} from '../Styles/Form.style';

const Form = () => {
  return (
    <FormValidation
      render={(
        //   Name
        name,
        setName,
        nameBorder,
        nameSuccess,
        nameFailed,
        nameMessage,
        // Email
        email,
        setEmail,
        emailBorder,
        emailSuccess,
        emailFailed,
        emailMessage,
        // Password
        password,
        setPassword,
        passwordBorder,
        passwordSuccess,
        passwordFailed,
        passwordMessage,
        // Function
        SubmitHandler
      ) => (
        <StyledForm onSubmit={SubmitHandler}>
          <StyledFormLabelInputBox>
            <StyledLabel htmlFor=''>Name</StyledLabel>
            <StyledInputBox style={{ border: nameBorder }}>
              <FaRegUser />
              <StyledInput
                placeholder='Joy Shaheb'
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <IoMdAlert
                style={{ display: nameFailed, color: 'red', fontSize: '18px' }}
              />
              <AiOutlineCheckCircle
                style={{
                  display: nameSuccess,
                  color: 'green',
                  fontSize: '18px',
                }}
              />
            </StyledInputBox>
            <StyledErrorMessage>{nameMessage}</StyledErrorMessage>
          </StyledFormLabelInputBox>
          <StyledFormLabelInputBox>
            <StyledLabel htmlFor=''>Email</StyledLabel>
            <StyledInputBox style={{ border: emailBorder }}>
              <GoMail />
              <StyledInput
                placeholder='abc@gmail.com'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <IoMdAlert
                style={{ display: emailFailed, color: 'red', fontSize: '18px' }}
              />
              <AiOutlineCheckCircle
                style={{
                  display: emailSuccess,
                  color: 'green',
                  fontSize: '18px',
                }}
              />
            </StyledInputBox>
            <StyledErrorMessage>{emailMessage}</StyledErrorMessage>
          </StyledFormLabelInputBox>
          <StyledFormLabelInputBox>
            <StyledLabel htmlFor=''>Password</StyledLabel>
            <StyledInputBox style={{ border: passwordBorder }}>
              <RiLock2Line />
              <StyledInput
                placeholder='●●●●●●●'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <IoMdAlert
                style={{
                  display: passwordFailed,
                  color: 'red',
                  fontSize: '18px',
                }}
              />
              <AiOutlineCheckCircle
                style={{
                  display: passwordSuccess,
                  color: 'green',
                  fontSize: '18px',
                }}
              />
            </StyledInputBox>
            <StyledErrorMessage>{passwordMessage}</StyledErrorMessage>
          </StyledFormLabelInputBox>
          <StyledInput type='Submit' />
        </StyledForm>
      )}
    />
  );
};

export default Form;
