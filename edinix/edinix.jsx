import React, { useRef, useState } from "react";
import EditIcon from "./editIcon.jsx";
import styles from  "./edinix.module.css";
import CrossIcon from "./crossIcon.jsx";


const Edinix = ({
  id,
  filePath,
  children,
  style,
  className,
  repo = {
    owner,
    repo,
  },
  changedText,
}) => {
  const dialogRef = useRef(null);
  const [changes, setChanges] = useState(changedText || "");
  const [showEditButton, setShowEditButton] = useState(false);

  const handleEditClick = () => {
    dialogRef.current.showModal();
  };

  const handleCloseDialog = () => {
    dialogRef.current.close();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`${className} ${styles.edinixContainer}`}
      key={id}
      id="edinix-container"
      style={{
        ...style,
        position: "relative"
      }}
      onMouseEnter={() => setShowEditButton(true)}
      onMouseLeave={() => setShowEditButton(false)}
    >
      {children}
      <div className={`${styles.editBtn} ${showEditButton ? styles.editBtnShow : ''}`}>
        <EditIcon onClick={handleEditClick} className={`${styles.editIcon}`}/>
      </div>
      <dialog ref={dialogRef}>
        <form className={`${styles.formContainer}`} onSubmit={handleSubmit}>
          <textarea
            placeholder="Enter text"
            value={changes}
            onChange={(e) => setChanges(e.target.value)}
            className={`${styles.textarea}`}
          />
          <button type="submit" className={`${styles.submitBtn}`}>Submit</button>
          <CrossIcon onClick={handleCloseDialog} className={`${styles.crossIcon}`}/>
        </form>
      </dialog>
    </div>
  );
};

export default Edinix;