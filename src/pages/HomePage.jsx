import React, { useState } from 'react';
import Button from '../components/Button';
import RegistrationForm from '../components/RegistrationForm';
// Style
import { HomePageWrapper } from '../Styles/HomePage.style';

const HomePage = () => {
  // Hooks
  //  State
  const [isOpen, setIsOpen] = useState(false);
  //  side effects
  // Custom functions
  const openRegistrationForm = () => {
    setIsOpen(true);
  };
  const closeRegistrationForm = () => {
    setIsOpen(false);
  };
  return (
    <>
      <HomePageWrapper>
        <Button text='Sign up' primary action={openRegistrationForm} />
      </HomePageWrapper>
      {isOpen && <RegistrationForm onClose={closeRegistrationForm} />}
    </>
  );
};

export default HomePage;
