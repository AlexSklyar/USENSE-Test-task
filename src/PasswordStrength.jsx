import React, { useState } from "react";
import PasswordBlocks from "./PasswordBlocks";

function PasswordStrength() {
  const [password, setPassword] = useState("");

  function handlePasswordChange(event) {
    event.preventDefault();
    setPassword(event.target.value.trim());
  }

  function calculatePasswordStrength() {
    if (password.length === 0) {
      return "none";
    } else if (password.length < 8) {
      return "less";
    } else if (
      (password.length >= 8 && /^[a-zA-Z]+$/.test(password)) ||
      /^\d+$/.test(password) ||
      /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(password)
    ) {
      return "weak";
    } else if (
      (password.length >= 8 && /^[a-zA-Z0-9]+$/.test(password)) ||
      /^[a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(password) ||
      /^[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(password)
    ) {
      return "medium";
    } else {
      return "strong";
    }
  }

  return (
    <div className="container">
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <PasswordBlocks calculatePasswordStrength={calculatePasswordStrength} />
    </div>
  );
}

export default PasswordStrength;
