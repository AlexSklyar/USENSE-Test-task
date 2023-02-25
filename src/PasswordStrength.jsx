import React, { useState } from 'react';

function PasswordStrength() {
  const [password, setPassword] = useState('');

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function calculatePasswordStrength() {
    if (password.length === 0) {
      return 'none';
    } else if (password.length < 8) {
      return 'weak';
    } else if (/^[a-zA-Z]+$/.test(password) || /^\d+$/.test(password) || /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(password)) {
      return 'weak';
    } else if (/^[a-zA-Z0-9]+$/.test(password) || /^[a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(password) || /^\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(password)) {
      return 'medium';
    } else {
      return 'strong';
    }
  }

  return (
    <div className="password-strength">
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      <div className={`password-strength__block ${calculatePasswordStrength() === 'weak' ? 'password-strength__block--weak' : ''}`}></div>
      <div className={`password-strength__block ${calculatePasswordStrength() === 'medium' ? 'password-strength__block--medium' : ''}`}></div>
      <div className={`password-strength__block ${calculatePasswordStrength() === 'strong' ? 'password-strength__block--strong' : ''}`}></div>
    </div>
  );
}

export default PasswordStrength;
