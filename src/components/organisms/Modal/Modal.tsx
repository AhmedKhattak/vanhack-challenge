import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";
import * as React from "react";
import { Button } from "../../atoms/Button";

import styles from "./styles.module.css";

export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  job: any;
}

function Modal({ handleClose, job, open }: ModalProps) {
  const router = useRouter();
  // React.useEffect(() => {
  //   document.body?.addEventListener("click", handleClose);

  //   return () => document.body?.removeEventListener("click", handleClose);
  // }, [handleClose]);
  console.log(job);

  return (
    <div className={clsx(styles.modal, !open && styles.hidden)}>
      <div className={styles.modal__content}>
        <div className={styles.modal__header}>
          <h2>Do you want to apply for this job</h2>
          <Image
            src="/static/images/svg/close.svg"
            width={24}
            height={24}
            alt="Close Icon"
            onClick={handleClose}
            className={styles["modal__header-close"]}
          />
        </div>
        <div className={styles.modal__footer}>
          <Button label="Cancel" onClick={handleClose} variant="text" />
          <Button
            label="Apply"
            onClick={() => router.push(`https://vanhack.com/job/${job}`)}
            variant="default"
          />
        </div>
      </div>
    </div>
  );
}

export { Modal };
