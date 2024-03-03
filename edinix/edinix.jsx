import React, { useRef, useState } from "react";
import EditIcon from "./editIcon.jsx";
import CrossIcon from "./crossIcon.jsx";
import axios from "axios";

const Edinix = ({
  id,
  filePath,
  children,
  style,
  className,
  repo: { owner, repo },
}) => {
  const dialogRef = useRef(null);
  const [changes, setChanges] = useState(children || "");
  const [showEditButton, setShowEditButton] = useState(false);

  const handleEditClick = () => {
    dialogRef.current.showModal();
  };

  const handleCloseDialog = () => {
    dialogRef.current.close();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/v1/create-pr", {
        id,
        owner,
        repo,
        changes,
        filePath,
      });
      console.log(res);
    } catch (error) {
    } finally {
      handleCloseDialog();
    }
  };

  return (
    <div
      className={`${className}`}
      key={id}
      id="edinix-container"
      style={{
        ...style,
        position: "relative",
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
      <dialog
        className="dialog"
        style={{ backgroundColor: "#0d121e" }}
        ref={dialogRef}
      >
        <button
          style={{
            color: "inherit",
            cursor: "pointer",
            position: "absolute",
            right: 0,
            top: 0,
            height: "25px",
            backgroundColor: "transparent",
            border: "none",
            padding: "5px",
          }}
          onClick={handleCloseDialog}
        >
          <CrossIcon style={{ color: "white" }} />
        </button>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            width: "300px",
            padding: "20px",
            fontSize: "20px",
            overflow: "auto",
          }}
          onSubmit={handleSubmit}
        >
          <textarea
            style={{
              boxSizing: "border-box",
              width: "100%",
              minHeight: "30px",
              outline: "none",
              backgroundColor: "black",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid lightgray",
            }}
            rows={10}
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
              backgroundColor: "#606673",
              color: "white",
              border: "none",
              fontSize: "17px",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#45a049")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#606673")}
          >
            Submit
          </button>
        </form>
      </dialog>
    </div>
  );
};

export default Edinix;
