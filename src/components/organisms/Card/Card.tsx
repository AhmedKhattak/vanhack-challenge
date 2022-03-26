import * as React from "react";

import { Badge } from "../../atoms/Badge";
import { Button } from "../../atoms/Button";

import styles from "./styles.module.css";
import Image from "next/image";
import { formartCurrency } from "../../../utils";
import { JobProps } from "../../../@types";

export interface CardProps {
  data: JobProps;
  onSelect: (data: JobProps) => void;
}

function Card({ data, onSelect }: CardProps) {
  const nowDate = new Date().getUTCHours();
  const relapsedTime = nowDate - new Date(data.createdAt).getUTCHours() ?? 0;

  return (
    <div className={styles.card}>
      <div className={styles.card__section}>
        <div>
          <Badge title={`New - ${relapsedTime} hours ago`} />
          <span>{data.numberOfPositions} positions</span>
        </div>
        <Button
          onClick={() => onSelect(data)}
          label={"APPLY"}
          variant="outline"
        />
      </div>
      <div className={styles.card__header}>{data.title}</div>
      <div className={styles.card__info}>
        <div className={styles["card__info-detail"]}>
          <Image
            src={"/static/images/svg/canada.svg"}
            width={20}
            height={14}
            alt={`Flag of country`}
          />
          <span>{data.location}</span>
        </div>
        <div className={styles["card__info-detail"]}>
          <Image
            src={"/static/images/svg/money.svg"}
            width={24}
            height={24}
            alt={`Flag of country`}
          />
          <span>{`${formartCurrency(data.salaryFrom)} - ${formartCurrency(
            data.salaryTo
          )}  ${data.currency}/Year`}</span>
        </div>
      </div>
      <div className={styles.card__resume}>{data.description}</div>
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
