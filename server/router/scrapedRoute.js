import express from "express";
const router = express.Router();
import {scrapConteroller } from "../controller/scraperController.js";
// Define a route for the root URL ('/')

console.log("dsfhks");
router.get("/", (req, res) => {
  res.send("Hello, World from the Router!");
});
router.post("/submit",scrapConteroller.createNewScrap)
router.put("/update",scrapConteroller.updateScrap)
export default router;
