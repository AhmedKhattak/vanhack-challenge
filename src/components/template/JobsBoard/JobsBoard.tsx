import * as React from "react";
import { Card } from "../../organisms/Card";

import styles from "./styles.module.css";

export interface JobsBoardProps {}

function JobsBoard() {
  return (
    <div className="container">
      <Card />
    </div>
  );
}

export { JobsBoard };
