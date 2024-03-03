import React, { useRef, useState } from "react";
import EditIcon from "./editIcon.jsx";
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
      className={`${className}`}
      key={id}
      id="edinix-container"
      style={{
        ...style,
        padding: "10px",
        fontFamily: "Arial, sans-serif",
      }}
      onMouseEnter={() => setShowEditButton(true)}
      onMouseLeave={() => setShowEditButton(false)}
    >
      {children}
      {showEditButton && (
        <button
          style={{
            opacity: 1,
            transition: "opacity 0.5s",
            position: "absolute",
            right: 0,
            top: 0,
            cursor: "pointer",
            backgroundColor: "transparent",
            border: "none",
          }}
          onClick={handleEditClick}
        >
          <EditIcon style={{ width: "25px", height: "25px" }} />
        </button>
      )}
      <dialog className="dialog" style={{backgroundColor: "#000",}} ref={dialogRef}>
        <button
          style={{
            color: "inherit",
            cursor: "pointer",
            position: "absolute",
            right: 0,
            top: 0,
            width: "25px",
            height: "25px",
            backgroundColor: "transparent",
            border: "none",
          }}
          onClick={handleCloseDialog}
        >
          <CrossIcon />
        </button>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            gap: "20px",
            width: "300px",
            padding: "20px",
          }}
          onSubmit={handleSubmit}
        >
          <textarea
            style={{
              boxSizing: "border-box",
              width: "100%",
              resize: "vertical",
              minHeight: "50px",
              outline: "none",
              backgroundColor: "black",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            value={changes}
            onChange={(e) => setChanges(e.target.value)}
          />
          <button
            type="submit"
            style={{
              width: "100px",
              height: "30px",
              borderRadius: "5px",
              cursor: "pointer",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#45a049")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#4CAF50")}
          >
            Submit
          </button>
        </form>
      </dialog>
    </div>
  );
};

export default Edinix;