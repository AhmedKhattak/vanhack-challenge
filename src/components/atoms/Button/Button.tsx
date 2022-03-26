import clsx from "clsx";
import * as React from "react";

import styles from "./styles.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "default" | "outline" | "text";
  onClick: () => void;
}

function Button({
  label,
  variant = "default",
  onClick = () => {},
  ...rest
}: ButtonProps) {
  const getVariantClass = `variant__${variant}`;

  return (
    <button
      className={clsx(styles.button, variant && styles[getVariantClass])}
      onClick={onClick}
      {...rest}
    >
      {label}
    </button>
  );
}

export { Button };
