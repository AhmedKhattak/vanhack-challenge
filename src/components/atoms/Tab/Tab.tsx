import * as React from "react";

import styles from "./styles.module.css";

export interface TabProps {
  children: any;
  index: number;
  active: boolean;
  onChange: (props: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function Tab({ children, index, active, onChange, ...rest }: TabProps) {
  return (
    <div
      className={styles.tab}
      data-index={index}
      data-active={active}
      onClick={onChange}
      {...rest}
    >
      {children}
    </div>
  );
}

export { Tab };
