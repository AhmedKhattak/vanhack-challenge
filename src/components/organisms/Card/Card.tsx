import * as React from "react";

import { Badge } from "../../atoms/Badge";
import { Button } from "../../atoms/Button";

import styles from "./styles.module.css";
import Image from "next/image";
import { formartCurrency } from "../../../utils";

/**
 * {
  id: 382705,
  createdAt: "2004-06-02T00:00:10.6800461+00:00",
  numberOfPositions: 5,
  companyName: "Willms, Dicki and Rohan",
  title: "Chief Configuration Specialist",
  area: "Legacy",
  description: "Aliquid ullam quia et architecto dolorem esse consequatur ea.\nLibero suscipit magnam incidunt ut quaerat.",
  skills: "Sunt omnis ab voluptatem est vitae neque quisquam.\nDicta est id dignissimos totam.",
  slug: "consequatur-non-facilis",
  totalHires: 7,
  flagCode: "LU",
  location: "Alexandreton - Saudi Arabia",
  relocate: "Remote",
  salaryFrom: 30849,
  salaryTo: 42092,
  currency: "REAL",
  jobType: "Officer",
  canApply: false
 }
 */
export interface JobProps {
  id: number;
  createdAt: string;
  numberOfPositions: number;
  companyName: string;
  title: string;
  area: string;
  description: string;
  skills: string;
  slug: string;
  totalHires: number;
  flagCode: string;
  location: string;
  relocate: string;
  salaryFrom: number;
  salaryTo: number;
  currency: string;
  jobType: string;
  canApply: boolean;
}
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
