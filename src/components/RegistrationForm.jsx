import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
// Components
import Button from './Button';
import Form from './Form';
// Icons
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';

// Styles
import {
  Overlay,
  ModalWrapper,
  StyledModal,
  StyledLeftSide,
  LogoWrapper,
  StyledImg,
  StyledImageText,
  StyledRightSide,
  ButtonsBox,
  StyledRightSideText,
  StyledHeadText,
  LoginText,
  OrText,
} from '../Styles/RegistrationForm.style';

const RegistrationForm = ({ onClose }) => {
  // Hooks
  // -- side effects
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    });
  }, [onClose]);

  // Custom funtions
  const closeOnOverlay = (e) => {
    if (e.target.dataset.id === 'modalWrapper') onClose();
    return;
  };
  return ReactDOM.createPortal(
    <>
      <Overlay></Overlay>
      <ModalWrapper onClick={(e) => closeOnOverlay(e)} data-id='modalWrapper'>
        <StyledModal>
          <StyledLeftSide>
            <LogoWrapper>
              <img
                src='https://raw.githubusercontent.com/JoyShaheb/Project-image-repo/e2aa9d5d409b28efe7040e4b92da891c64ee23ce/Form-Validation/images/logo.svg'
                alt='Logo'
              />
            </LogoWrapper>
            <StyledImg
              src='https://raw.githubusercontent.com/JoyShaheb/Project-image-repo/e2aa9d5d409b28efe7040e4b92da891c64ee23ce/Form-Validation/images/illustration.svg'
              alt='StandingMan'
            />

            <StyledImageText>
              Start for free & Get Attractive offers Today !
            </StyledImageText>
          </StyledLeftSide>
          <StyledRightSide>
            <StyledRightSideText>
              <StyledHeadText>Get Started</StyledHeadText>
              <p>Already have an account?</p>
              <LoginText>Log in</LoginText>
            </StyledRightSideText>
            <ButtonsBox>
              <Button
                text={
                  <>
                    <FcGoogle /> <p>sign up</p>
                  </>
                }
                primary
              />
              <Button
                text={
                  <>
                    <BsFacebook /> <p>sign up</p>
                  </>
                }
                secondary
              />
            </ButtonsBox>
            <OrText>Or</OrText>
            <Form />
          </StyledRightSide>
        </StyledModal>
      </ModalWrapper>
    </>,
    document.getElementById('portal')
  );
};

export default RegistrationForm;
