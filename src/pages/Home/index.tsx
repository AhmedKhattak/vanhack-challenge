import * as React from "react";
import Image from "next/image";

import { Tabs } from "../../components/molecules/Tabs";
import { JobsBoard } from "../../components/template/JobsBoard";
import { LearnMore } from "../../components/template/LearnMore";
import { tabs } from "../../constants";

import styles from "./style.module.css";
import clsx from "clsx";
import Link from "next/link";
import { useFetchJobs } from "../../hooks/useFetchJobs";

function HomePage() {
  return (
    <main className={styles.container}>
      <section className={clsx([styles.section, styles.logo])}>
        <Link href="/" passHref>
          <a>
            <Image
              src={"/vanhack-small.svg"}
              alt="A letter V and H simbolizing the company name: Van Hack"
              width={136}
              height={29}
            />
          </a>
        </Link>
      </section>
      <section className={styles.section}>
        {/* Tabs */}
        <Tabs tabLabels={[tabs.jobsLabel, tabs.articleLabel]}>
          {[<JobsBoard key="jobs" />, <LearnMore key="learn" />]}
        </Tabs>
      </section>
    </main>
  );
}

export default HomePage;
