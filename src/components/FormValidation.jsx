import { useState } from 'react';

const FormValidation = ({ render }) => {
  // NameInput
  const [name, setName] = useState('');
  const [nameBorder, setNameBorder] = useState('1px solid lightgrey');
  const [nameSuccess, setNameSuccess] = useState('none');
  const [nameFailed, setNameFailed] = useState('none');
  const [nameMessage, setNameMessage] = useState('');
  // EmailInput
  const [email, setEmail] = useState('');
  const [emailBorder, setEmailBorder] = useState('1px solid lightgrey');
  const [emailSuccess, setEmailSuccess] = useState('none');
  const [emailFailed, setEmailFailed] = useState('none');
  const [emailMessage, setEmailMessage] = useState('');
  //   Password Input
  const [password, setPassword] = useState('');
  const [passwordBorder, setPasswordBorder] = useState('1px solid lightgrey');
  const [passwordSuccess, setPasswordSuccess] = useState('none');
  const [passwordFailed, setPasswordFailed] = useState('none');
  const [passwordMessage, setPasswordMessage] = useState('');
  //   Validation
  const SubmitHandler = (e) => {
    e.preventDefault();
    // Name input validation
    NameValidation();
    // Email input validation
    EmailValidation();
    // Password input validation
    PasswordValidation();
  };

  const NameValidation = () => {
    // Name input validation
    if (name.length === 0) {
      setNameBorder('2px solid red');
      setNameFailed('block');
      setNameSuccess('none');
      setNameMessage('Name cannot be blank');
    } else {
      setNameBorder('2px solid green');
      setNameSuccess('block');
      setNameFailed('none');
      setNameMessage('');
    }
  };
  const EmailValidation = () => {
    if (email.length === 0) {
      setEmailBorder('2px solid red');
      setEmailFailed('block');
      setEmailSuccess('none');
      setEmailMessage('Email cannot be blank');
    } else {
      setEmailBorder('2px solid green');
      setEmailSuccess('block');
      setEmailFailed('none');
      setEmailMessage('');
    }
  };
  const PasswordValidation = () => {
    if (password.length === 0) {
      setPasswordBorder('2px solid red');
      setPasswordFailed('block');
      setPasswordSuccess('none');
      setPasswordMessage('Password cannot be blank');
    } else {
      setPasswordBorder('2px solid green');
      setPasswordSuccess('block');
      setPasswordFailed('none');
      setPasswordMessage('');
    }
  };

  return render(
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
  );
};

export default FormValidation;
