import * as React from "react";

import { Badge } from "../../atoms/Badge";
import { Button } from "../../atoms/Button";

import styles from "./styles.module.css";
import Image from "next/image";

export interface JobProps {
  country: string;
}
export interface CardProps {
  data: JobProps;
}

function Card({ data }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.card__section}>
        <div>
          <Badge title={"New - 12 hours ago"} />
          <span>3 positions</span>
        </div>
        <Button onClick={() => {}} label={"APPLY"} variant="outline" />
      </div>
      <div className={styles.card__header}>
        Full Stack PHP, Javascript, and WordPress Developer
      </div>
      <div className={styles.card__info}>
        <div className={styles["card__info-detail"]}>
          <Image
            src={"/static/images/svg/canada.svg"}
            width={20}
            height={14}
            alt={`Flag of country`}
          />
          <span> Vancouver, Canada</span>
        </div>
        <div className={styles["card__info-detail"]}>
          <Image
            src={"/static/images/svg/money.svg"}
            width={24}
            height={24}
            alt={`Flag of country`}
          />
          <span> $120 - 160k CAD/Annual</span>
        </div>
      </div>
      <div className={styles.card__resume}>
        We are searching for a full-stack developer to join our engineering
        team, helping to build digital solutions of all sizes and levels of
        complexity. Many of these projects involve WordPress, some use Laravel,
      </div>
      <div className={styles.card__footer}>
        <Badge title={"Machine Learning "} variant="outline" />
        <Badge title={"Interaction Design"} variant="outline" />
        <Badge title={"Signal R"} variant="outline" />
        <Badge title={"Dapper"} variant="outline" />
      </div>
    </div>
  );
}

export { Card };
