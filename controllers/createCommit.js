const axios = require("axios");
require("dotenv").config();
const { JSDOM } = require("jsdom");


const token = process.env.GITHUB_TOKEN;

const createCommit = async (req, res, sourceBranch) => {
  const { owner, repo, filePath, id, changes } = req.body;
  const authHeaders = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  try {
    const branchRes = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/git/ref/heads/${sourceBranch}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const latestCommitSha = branchRes.data.object.sha;
    const fileRes = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}?ref=${sourceBranch}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const fileContent = Buffer.from(fileRes.data.content, "base64").toString(
      "utf-8"
    );
    const { window } = new JSDOM(fileContent);
    const doc = window.document;

    const elementToChange = doc.querySelector(`#${id}`);
    let updatedFileContent = "";
    if (elementToChange) {
      elementToChange.textContent = changes;
      updatedFileContent = doc.documentElement.outerHTML;
    } else {
      console.log(`Element with ID '${id}' not found`);
    }
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
    await axios.patch(
      `https://api.github.com/repos/${owner}/${repo}/git/refs/heads/${sourceBranch}`,
      {
        sha: newCommitSha,
      },
      {
        headers: authHeaders,
      }
    );
    return `File ${filePath} has been updated in branch ${sourceBranch}`;
  } catch (error) {
    console.error("Error committing file:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while committing the file" });
  }
};

module.exports = createCommit;
