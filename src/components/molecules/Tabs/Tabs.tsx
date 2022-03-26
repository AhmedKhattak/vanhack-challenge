import * as React from "react";

import styles from "./styles.module.css";
import { Tab } from "../../atoms/Tab";
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabLabels: Array<string>;
  children: React.ReactNode[] | JSX.Element[];
}

function Tabs({ tabLabels, children, ...rest }: TabsProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  function handleIndexChange(
    props: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const { index } = props.currentTarget.dataset;
    setActiveIndex(parseInt(index || "0"));
  }

  console.log(activeIndex);

  const childrenRenderer = React.useCallback(() => {
    return children[activeIndex];
  }, [activeIndex, children]);

  const isActive = (value: number) => activeIndex === value;

  return (
    <div className={styles.tabs} {...rest}>
      <div className={styles.tabs__label}>
        {tabLabels.map((tab, index) => (
          <Tab
            key={tab}
            index={index}
            active={isActive(index)}
            onChange={handleIndexChange}
          >
            {tab}
          </Tab>
        ))}
      </div>
      <div className={styles.tabs__content}>{childrenRenderer()}</div>
    </div>
  );
}

export { Tabs };
