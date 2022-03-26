import Image from "next/image";
import * as React from "react";
import { article, title } from "../../../constants";

import styles from "./styles.module.css";

export interface LearnMoreProps {}

function LearnMore() {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.header__title}>{title}</h1>
      </div>
      <div className={styles.header__placeholder}></div>
      <div className={styles.container}>
        <Image
          src={"/static/images/png/taken.png"}
          width={339}
          height={372}
          alt={"image of a spaceship taken an alien on board"}
        />

        <article className={styles.article}>
          {article.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
      </div>
    </>
  );
}

export { LearnMore };
