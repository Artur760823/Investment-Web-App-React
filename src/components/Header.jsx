import React from 'react';
import logo from '../assets/investment-calculator-logo.png';

const Header = () => {
  return (
    <div id="header">
      <h1>React Investment Calculator</h1>
      <img src={logo} alt="investments-logo" />
    </div>
  )
}

export default Header;