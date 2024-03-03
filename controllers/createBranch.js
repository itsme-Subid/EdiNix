const axios = require("axios");
require("dotenv").config();

const token = process.env.GITHUB_TOKEN;

const createBranch = async (req, res, branch) => {
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
    return res.json(createBranchRes.data);
  } catch (error) {
    console.error("Error creating branch:", error.response.data.message);
  }
};

module.exports = createBranch;
