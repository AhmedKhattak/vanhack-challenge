import * as React from "react";

import styles from "./styles.module.css";

export interface ModalProps {
  open: boolean;
  handleClose: () => void;
  job: any;
}

function Modal({ handleClose, job, open }: ModalProps) {
  return (
    <div className="container">
      <h1>Modal</h1>
    </div>
  );
}

export { Modal };
