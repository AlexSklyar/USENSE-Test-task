import React from "react";

const styles = {
  less: { backgroundColor: "red" },
  weak: { backgroundColor: "red" },
  medium: { backgroundColor: "yellow" },
  strong: { backgroundColor: "green" },
};

function PasswordBlock({ strength, calculatePasswordStrength }) {
  let blockStyles;

  if (strength === "weak") {
    calculatePasswordStrength() === "weak"
      ? (blockStyles = styles.weak)
      : calculatePasswordStrength() === "medium"
      ? (blockStyles = styles.medium)
      : calculatePasswordStrength() === "strong"
      ? (blockStyles = styles.strong)
      : calculatePasswordStrength() === "less"
      ? (blockStyles = styles.less)
      : (blockStyles = styles.none);
  }
  if (strength === "medium") {
    calculatePasswordStrength() === "medium"
      ? (blockStyles = styles.medium)
      : calculatePasswordStrength() === "strong"
      ? (blockStyles = styles.strong)
      : calculatePasswordStrength() === "less"
      ? (blockStyles = styles.less)
      : (blockStyles = styles.none);
  }
  if (strength === "strong") {
    calculatePasswordStrength() === "strong"
      ? (blockStyles = styles.strong)
      : calculatePasswordStrength() === "less"
      ? (blockStyles = styles.less)
      : (blockStyles = styles.none);
  }

  return <div className="password-strength__block" style={blockStyles}></div>;
}

export default PasswordBlock;
