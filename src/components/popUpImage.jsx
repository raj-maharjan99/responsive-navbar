import React, { useState } from "react";
import styles from "./popUp.module.css";
function PopUpImage() {
  const [showModal, setShowModal] = useState(true);
  function MyModal() {
    return (
      <>
        <div
          className={styles.modalCover}
          onClick={() => setShowModal(false)}
        ></div>
        <div className={styles.modalContainer}>
          <img src="samragi.jpg" height="600px" width="600px" alt="" />
          <button className={styles.btn} onClick={() => setShowModal(false)}>
            x
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      <div>{showModal && <MyModal />}</div>
    </>
  );
}

export default PopUpImage;
