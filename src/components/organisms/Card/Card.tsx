import * as React from "react";

import styles from "./styles.module.css";

export interface CardProps {}

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.card__section}>
        <div>
          <span>New - 12 hours ago</span>
          <span>3 positions</span>
        </div>
        <button>APPLY</button>
      </div>
      <div className={styles.card__header}>
        Full Stack PHP, Javascript, and WordPress Developer
      </div>
      <div className={styles.card__info}>
        <span>Vancouver, Canada</span>
        <span> $120 - 160k CAD/Annual</span>
      </div>
      <div className={styles.card__resume}>
        We are searching for a full-stack developer to join our engineering
        team, helping to build digital solutions of all sizes and levels of
        complexity. Many of these projects involve WordPress, some use Laravel,
      </div>
      <div className={styles.card__footer}>
        <span>Machine Learning </span>
        <span>Interaction Design</span>
        <span>Signal R </span>
        <span>Dapper </span>
      </div>
    </div>
  );
}

export { Card };
