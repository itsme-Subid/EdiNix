const { Router } = require("express");
const axios = require("axios");
require("dotenv").config();

const router = Router();

const token = process.env.GITHUB_TOKEN;

router.post("/commit", async (req, res) => {
  const { sourceBranch } = req.query;
  const { owner, repo, filePath } = req.body;
  const authHeaders = {
    Authorization: `token ${token}`,
    "Content-Type": "application/json",
  };

  try {
    const branchRes = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/git/ref/heads/${sourceBranch}`,
      {
        headers: authHeaders,
      }
    );
    const latestCommitSha = branchRes.data.object.sha;
    const fileRes = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}?ref=${sourceBranch}`,
      {
        headers: authHeaders,
      }
    );
    const fileContent = Buffer.from(fileRes.data.content, "base64").toString(
      "utf-8"
    );
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
  } catch (error) {
    console.error("Error committing file:", error);
  }
});

router.post("/branch", async (req, res) => {
  const { branch } = req.query;
  const { owner, repo } = req.body;
  const authHeaders = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const mainBranchRef = "heads/main"; // Replace with the main branch of repository
    const mainBranchRes = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/git/refs/${mainBranchRef}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const mainBranchSha = mainBranchRes.data.object.sha;
    console.log({
      owner,
      repo,
      branch,
      mainBranchSha,
      authHeaders,
    });
    const createBranchRes = await axios.post(
      `https://api.github.com/repos/${owner}/${repo}/git/refs`,
      {
        ref: `refs/heads/${branch}`,
        sha: mainBranchSha,
      },
      {
        headers: authHeaders,
      }
    );
    return createBranchRes.data;
  } catch (error) {
    console.error("Error creating branch:", error.response.data.message);
  }
});

router.post("/pull-request", async (req, res) => {
  const { sourceBranch, destinationBranch } = req.query;
  const { owner, repo, title, body } = req.body;
  const data = {
    title,
    base: destinationBranch,
    head: sourceBranch,
    body,
  };
  try {
    const response = await axios.post(
      `https://api.github.com/repos/${owner}/${repo}/pulls`,
      data,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating branch:", error.response.data.message);
  }
});

// export default router;
module.exports = router;
