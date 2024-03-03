const { Router } = require("express");
const { v4: uuidv4 } = require("uuid");
const createBranch = require("../controllers/createBranch");
const createCommit = require("../controllers/createCommit");
const createPR = require("../controllers/createPR");

const router = Router();

router.post("/commit", async (req, res) => {
  const { sourceBranch } = req.query;
  const resCommit = await createCommit(req, res, sourceBranch);
  return res.json(resCommit);
});

router.post("/branch", async (req, res) => {
  const { branch } = req.query;
  const resBranch = await createBranch(req, res, branch);
  return res.json(resBranch);
});

router.post("/pull-request", async (req, res) => {
  const { sourceBranch, destinationBranch } = req.query;
  const resPR = await createPR(req, res, sourceBranch, destinationBranch);
  return res.json(resPR);
});

router.post("/create-pr", async (req, res) => {
  const head = uuidv4();
  await createBranch(req, res, head);
  await createCommit(req, res, head);
  const resPR = await createPR(req, res, head, "main");
  return res.json(resPR);
});

module.exports = router;
