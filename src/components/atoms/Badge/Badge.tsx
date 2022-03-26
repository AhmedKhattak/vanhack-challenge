import * as React from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

export interface BadgeProps {
  title: string;
  variant?: "default" | "outline" | "text";
}

function Badge({ title, variant, ...rest }: BadgeProps) {
  const getVariantClass = `variant__${variant}`;
  return (
    <span
      className={clsx(styles.badge, variant && styles[getVariantClass])}
      {...rest}
    >
      {title}
    </span>
  );
}

export { Badge };
