import React from 'react';
import { WhiteButton, BlueButton } from '../Styles/Button.style';

const Button = ({ action, text, primary, secondary }) => {
  let button;
  if (primary) button = <WhiteButton onClick={action}>{text}</WhiteButton>;
  if (secondary) button = <BlueButton onClick={action}>{text}</BlueButton>;
  return button;
};

export default Button;
