const axios = require("axios");
require("dotenv").config();

const token = process.env.GITHUB_TOKEN;

const createPR = async (req, res, sourceBranch, destinationBranch) => {
  const {
    owner,
    repo,
    title = `Updated ${req.body.filePath}`,
    body = `Modified element(s) with ${req.body.id} in ${req.body.filePath}`,
  } = req.body;
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
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating Pull request:", error.response);
  }
};

module.exports = createPR;
