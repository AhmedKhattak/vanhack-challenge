import * as React from "react";
import Image from "next/image";

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
            <span>tab1</span>
            <span>tab2</span>
          </div>
        </section>
      </div>
    </main>
  );
}

export default HomePage;
