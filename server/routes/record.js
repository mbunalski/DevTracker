import express from "express";

import Task from '../models/task.js';

import {createTask, getAllTask, deleteTask} from '../controllers/taskController.js';

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

// // This section will help you get a single record by id

// // This section will help you update a record by id.
// router.patch("/:id", async (req, res) => {
//   try {
//     const query = { _id: new ObjectId(req.params.id) };
//     const updates = {
//       $set: {
//         name: req.body.name,
//         position: req.body.position,
//         level: req.body.level,
//       },
//     };

//     let collection = await db.collection("records");
//     let result = await collection.updateOne(query, updates);
//     res.send(result).status(200);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error updating record");
//   }
// });

// // This section will help you delete a record
router.delete("/delete", deleteTask);

export default router;