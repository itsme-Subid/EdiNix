import React, { useRef, useState } from "react";
import axios from "axios";

const token = "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";

async function commitToFile({ owner, repo, branchName, filePath }) {
  const authHeaders = {
    Authorization: `token ${token}`,
    "Content-Type": "application/json",
  };

  try {
    // Step 1: Get the latest commit SHA of the branch
    const branchRes = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/git/ref/heads/${branchName}`,
      {
        headers: authHeaders,
      }
    );
    const latestCommitSha = branchRes.data.object.sha;
    // Step 2: Get the current content of the file
    const fileRes = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}?ref=${branchName}`,
      {
        headers: authHeaders,
      }
    );
    // const fileContent = Buffer.from(fileRes.data.content, "base64").toString(
    //   "utf-8"
    // );
    // fileRes.data.content is encoded in base64, so we need to decode it
    // Buffer is not available in the browser, so we use the btoa function
    const fileContent = atob(fileRes.data.content);
    console.log(fileContent);
    // Step 3: Modify the content of the file
    const updatedFileContent = fileContent + "\nUpdated content";

    // Step 4: Create a new blob with the updated file content
    const blobRes = await axios.post(
      `https://api.github.com/repos/${owner}/${repo}/git/blobs`,
      {
        content: updatedFileContent,
        encoding: "utf-8",
      },
      {
        headers: authHeaders,
      }
    );
    const newBlobSha = blobRes.data.sha;

    // Step 5: Create a new tree object with the updated blob
    const treeRes = await axios.post(
      `https://api.github.com/repos/${owner}/${repo}/git/trees`,
      {
        base_tree: latestCommitSha,
        tree: [
          {
            path: filePath,
            mode: "100644",
            type: "blob",
            sha: newBlobSha,
          },
        ],
      },
      {
        headers: authHeaders,
      }
    );
    const newTreeSha = treeRes.data.sha;

    // Step 6: Create a new commit referencing the new tree object and the latest commit
    const commitRes = await axios.post(
      `https://api.github.com/repos/${owner}/${repo}/git/commits`,
      {
        message: "Update file content",
        tree: newTreeSha,
        parents: [latestCommitSha],
      },
      {
        headers: authHeaders,
      }
    );
    const newCommitSha = commitRes.data.sha;

    // Step 7: Update the reference of the branch to point to the new commit
    await axios.patch(
      `https://api.github.com/repos/${owner}/${repo}/git/refs/heads/${branchName}`,
      {
        sha: newCommitSha,
      },
      {
        headers: authHeaders,
      }
    );

    console.log("File committed successfully!");
  } catch (error) {
    console.error("Error committing file:", error);
  }
}

async function createBranch({ owner, repo, branchName }) {
  const authHeaders = {
    Authorization: `token ${token}`,
    "Content-Type": "application/json",
  };

  try {
    const mainBranchRef = "heads/main";
    const mainBranchRes = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/git/refs/${mainBranchRef}`,
      {
        headers: authHeaders,
      }
    );
    const mainBranchSha = mainBranchRes.data.object.sha;

    const createBranchRes = await axios.post(
      `https://api.github.com/repos/${owner}/${repo}/git/refs`,
      {
        ref: `refs/heads/${branchName}`,
        sha: mainBranchSha,
      },
      {
        headers: authHeaders,
      }
    );
    console.log({
      data: createBranchRes.data,
    });
    console.log(`Branch '${branchName}' created successfully!`);
  } catch (error) {
    console.error("Error creating branch:", error.response.data.message);
  }
}

async function createPullRequest({ owner, repo, title, base, head, body }) {
  const data = {
    title: title,
    head: head,
    base: base,
    body: body,
  };
  const response = await axios.post(
    `https://api.github.com/repos/${owner}/${repo}/pulls`,
    data,
    {
      headers: {
        Authorization: `token ${token}`,
      },
    }
  );
  console.log({
    data: response.data,
  });
  return response.data;
}

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
  // createBranch({
  //   owner: repo.owner,
  //   repo: repo.repo,
  //   branchName: "test2",
  // });
  commitToFile({
    owner: repo.owner,
    repo: repo.repo,
    branchName: "test1",
    filePath,
  });
  const dialogRef = useRef(null);
  const [body, setBody] = useState(children);
  const [title, setTitle] = useState(`Update "${filePath}"`);

  const handleEditClick = () => {
    dialogRef.current.showModal();
  };

  const handleCloseDialog = () => {
    dialogRef.current.close();
  };

  const handleBody = (e) => {
    setBody(e.target.value);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPullRequest({
      owner: repo.owner,
      repo: repo.repo,
      title,
      base: "main",
      head: "test",
      body: change,
    });
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
            onChange={handleTitle}
          />
          <input
            type="text"
            placeholder="Enter text"
            value={body}
            onChange={handleBody}
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
