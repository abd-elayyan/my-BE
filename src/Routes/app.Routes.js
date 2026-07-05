import { Router } from "express";
import {
  viewAllBooks,
  addNewBook,
  editBook,
  deleteBook,
} from "../controller/app.controller.js";
const router = Router();

router.get("/", viewAllBooks);
router.post("/", addNewBook);
router.put("/:id", editBook);
router.delete("/:id", deleteBook);
export default router;
