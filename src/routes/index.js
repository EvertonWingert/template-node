import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.send(200).json({
    message: "Hello World",
  });
});


export default router;