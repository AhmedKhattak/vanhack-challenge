import * as React from "react";

import styles from "./styles.module.css";

export interface TabProps {
  children: any;
  index: number;
  onChange: (props: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function Tab({ children, index, onChange, ...rest }: TabProps) {
  return (
    <div className="tab" data-index={index} onClick={onChange} {...rest}>
      {children}
    </div>
  );
}

export { Tab };
