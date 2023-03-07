import React from "react";
import PasswordBlock from "./PasswordBlock";

function PasswordBlocks({ calculatePasswordStrength, styles }) {
  return (
    <div className="password-strength">
      <PasswordBlock
        strength="weak"
        calculatePasswordStrength={calculatePasswordStrength}
        styles={styles}
      />

      <PasswordBlock
        strength="medium"
        calculatePasswordStrength={calculatePasswordStrength}
        styles={styles}
      />

      <PasswordBlock
        strength="strong"
        calculatePasswordStrength={calculatePasswordStrength}
        styles={styles}
      />
    </div>
  );
}

export default PasswordBlocks;
