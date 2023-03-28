import express from "express";
import {
  deleteById,
  getData,
  getDatabyId,
  insertData,
  updateById,
} from "../controllers/dataController.js";
const router = express.Router();
router.route("/Todos").get(getData).post(insertData);
router
  .route("/Todos/:id")
  .get(getDatabyId)
  .patch(updateById)
  .delete(deleteById);
  export default router
