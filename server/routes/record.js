import express from "express";

import Task from '../models/task.js';

import {createTask, getAllTask, deleteTask, updateTask} from '../controllers/taskController.js';

// This help convert the id from string to ObjectId for the _id.
import { ObjectId } from "mongodb";

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", getAllTask);

// This section will help you create a new record.
router.post("/", createTask);

// // This section will help you update a record by id.
router.patch("/update", updateTask);

// // This section will help you delete a record
router.delete("/delete", deleteTask);

export default router;