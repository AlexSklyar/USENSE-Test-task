import React, { useState } from 'react';


const styles = {
  less: {backgroundColor: "red"},
  weak: {backgroundColor: "red"},
  medium: {backgroundColor: "yellow"},
  strong: {backgroundColor: "green"},
}

function PasswordStrength() {
  const [password, setPassword] = useState('');
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function calculatePasswordStrength() {
    if (password.length === 0) {
      return 'none';
    } else if (password.length < 8) {
      return 'less';
    } else if (password.length >= 8 && /^[a-zA-Z]+$/.test(password) || /^\d+$/.test(password) || /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(password)) {
      return 'weak';
    } else if (password.length >= 8 && /^[a-zA-Z0-9]+$/.test(password) || /^[a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(password) || /^\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(password)) {
      return 'medium';
    } else{
      return 'strong';
    }
  }

   return (
    <div className="container">
    <label htmlFor="password">Password:</label>
    <input type="password" id="password" value={password} onChange={handlePasswordChange} />
    <div className="password-strength">
      <div className={'password-strength__block'} 

      style={
        calculatePasswordStrength() === 'weak'?
        styles.weak : 
        calculatePasswordStrength() === 'medium'? 
        styles.medium  : 
        calculatePasswordStrength() === 'strong'? 
        styles.strong  : 
        calculatePasswordStrength() === 'less'?
        styles.less : styles.none
        }></div>

      <div className={'password-strength__block'} 
      style={
        calculatePasswordStrength() === 'medium'? 
        styles.medium  : 
        calculatePasswordStrength() === 'strong'? 
        styles.strong  : 
        calculatePasswordStrength() === 'less'?
        styles.less : styles.none
        }></div>

      <div className={'password-strength__block'} style={
        calculatePasswordStrength() === 'strong'? 
        styles.strong  : 
        calculatePasswordStrength() === 'less'?
        styles.less : styles.none
        }></div>
    </div>
    </div>
  );
}

export default PasswordStrength;
