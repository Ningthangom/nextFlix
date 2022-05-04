import React from 'react'
import { useRouter } from 'next/router'
import Modal from "react-modal";
import styles from './video.module.css'

// the id is from the very first div of the whole app body
Modal.setAppElement("#__next");

const  Video = () => {

    const router = useRouter();
    console.log({router})

  return (
    <div>
      {" "}
      <Modal
        isOpen={true}
        contentLabel="watch the video"
        onRequestClose={() => router.back()}
        overlayClassName={styles.overlay}
      >
        <div>I am a modal {router.query.video}</div>
      </Modal>
    </div>
  );
}

export default Video