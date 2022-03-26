import * as React from "react";
import Image from "next/image";

import { Tabs } from "../../components/molecules/Tabs";
import { JobsBoard } from "../../components/template/JobsBoard";
import { LearnMore } from "../../components/template/LearnMore";
import { tabs } from "../../constants";

import styles from "./style.module.css";

function HomePage() {
  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.section}>
          <Image
            src={"/vanhack-small.svg"}
            alt="A letter V and H simbolizing the company name: Van Hack"
            width={136}
            height={29}
          />
        </section>
        <section className={styles.section}>
          {/* Tabs */}
          <div>
            <Tabs tabLabels={[tabs.jobsLabel, tabs.articleLabel]}>
              {[<JobsBoard key="jobs" />, <LearnMore key="learn" />]}
            </Tabs>
          </div>
        </section>
      </div>
    </main>
  );
}

export default HomePage;
