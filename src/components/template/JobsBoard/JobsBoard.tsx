import * as React from "react";
import { JobProps } from "../../../@types";
import { buttons } from "../../../constants";
import { getMoreJobPost, useFetchJobs } from "../../../hooks/useFetchJobs";
import { Button } from "../../atoms/Button";
import { Card } from "../../organisms/Card";
import { Modal } from "../../organisms/Modal";

import styles from "./styles.module.css";

export interface BackDropProps {
  open: boolean;
  handleClose: () => void;
}

export interface ModalJobProps {}
export interface JobsBoardProps {}

function JobsBoard() {
  const [open, setOpen] = React.useState(false);
  const [modalJob, setModalJob] = React.useState();
  const {
    dispatch,
    state: { data, error, loading, hasNext, index, pageSize },
  } = useFetchJobs();

  function handleOpenModal(job: any) {
    setOpen(true);
  }
  function handleCloseModal() {
    setOpen(false);
  }

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className={styles.container}>
        {data.map((job: JobProps) => (
          <Card key={job.id} data={job} onSelect={() => handleOpenModal(job)} />
        ))}
        <Button
          disabled={!hasNext}
          onClick={async () => {
            await getMoreJobPost(dispatch, index, pageSize);
          }}
          label={buttons.loadMore}
          style={{ flex: 1, width: "100%" }}
        />
      </div>
      <Modal open={open} job={{}} handleClose={handleCloseModal} />
    </>
  );
}

export { JobsBoard };
