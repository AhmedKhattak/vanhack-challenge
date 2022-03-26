import clsx from "clsx";
import * as React from "react";
import { Card } from "../../organisms/Card";
import { Modal } from "../../organisms/Modal";

import styles from "./styles.module.css";

export interface BackDropProps {
  open: boolean;
  handleClose: () => void;
}
export interface ModalJobProps {}
export interface JobsBoardProps {}

const BackDrop = ({ open, handleClose }: BackDropProps) => {
  React.useEffect(() => {
    const backdropElement = document.querySelector("#backdrop");
    backdropElement?.addEventListener("click", handleClose);

    return () => backdropElement?.removeEventListener("click", handleClose);
  }, [handleClose]);
  return (
    <div
      id="backdrop"
      className={clsx([styles.backdrop, open ? false : styles.hidden])}
    ></div>
  );
};

const mockJob = [
  {
    id: 382705,
    createdAt: "2004-06-02T00:00:10.6800461+00:00",
    numberOfPositions: 5,
    companyName: "Willms, Dicki and Rohan",
    title: "Chief Configuration Specialist",
    area: "Legacy",
    description:
      "Aliquid ullam quia et architecto dolorem esse consequatur ea.\nLibero suscipit magnam incidunt ut quaerat.",
    skills:
      "Sunt omnis ab voluptatem est vitae neque quisquam.\nDicta est id dignissimos totam.",
    slug: "consequatur-non-facilis",
    totalHires: 7,
    flagCode: "LU",
    location: "Alexandreton - Saudi Arabia",
    relocate: "Remote",
    salaryFrom: 30849,
    salaryTo: 42092,
    currency: "REAL",
    jobType: "Officer",
    canApply: false,
  },
];

function JobsBoard() {
  const [open, setOpen] = React.useState(false);
  const [modalJob, setModalJob] = React.useState();

  function handleOpenModal(job: any) {
    setOpen(true);
  }
  function handleCloseModal() {
    setOpen(false);
  }
  return (
    <>
      <div className="container">
        {mockJob.map((job) => (
          <Card key={job.id} data={job} onSelect={() => handleOpenModal(job)} />
        ))}
      </div>
      <Modal open={open} job={{}} handleClose={handleCloseModal} />
      <BackDrop
        open={open}
        handleClose={() => setOpen((prevState) => !prevState)}
      />
    </>
  );
}

export { JobsBoard };
