import React, { useRef, useState } from "react";

const Edinix = ({
  id,
  filePath,
  children,
  style,
  repo = {
    owner,
    repo,
  },
}) => {
  const dialogRef = useRef(null);
  const [body, setBody] = useState(children);
  const [title, setTitle] = useState(`Update "${filePath}"`);
  const [changes, setChanges] = useState("");

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
      key={id}
      style={{
        ...style,
        position: "relative",
      }}
    >
      {children}
      <div style={{ position: "absolute", top: 0, right: 0 }}>
        <button onClick={handleEditClick}>Edit</button>
      </div>
      <dialog ref={dialogRef}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter text"
            value={changes}
            onChange={(e) => setChanges(e.target.value)}
          />
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCloseDialog}>
            Close
          </button>
        </form>
      </dialog>
    </div>
  );
};

export default Edinix;
