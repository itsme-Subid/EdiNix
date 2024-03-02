const { Router } = require("express");
const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
const createBranch = require("../controllers/createBranch");
const createCommit = require("../controllers/createCommit");
const createPR = require("../controllers/createPR");

const router = Router();

router.post("/commit", () => {
  const { sourceBranch } = req.query;
  createCommit(req, res, sourceBranch);
});

router.post("/branch", (req, res) => {
  const { branch } = req.query;
  createBranch(req, res, branch);
});

router.post("/pull-request", (req, res) => {
  const { sourceBranch, destinationBranch } = req.query;
  createPR(req, res, sourceBranch, destinationBranch);
});

router.post("/create-pr", async (req, res) => {
  const head = uuidv4();
  await createBranch(req, res, head);
  await createCommit(req, res, head);
  await createPR(req, res, head, "main");
});

module.exports = router;
