import Task from '../models/task.js';
import db from "../db/connection.js";
import { ObjectId } from 'mongodb';



export async function createTask(req, res) {
    try {
      let newtask = new Task ({
            _id: req.body.id,
            description: req.body.description,
            notes: req.body.notes,
            startDate: req.body.startDate,
            creationTime: new Date(), 
            closed: req.body.closed
        })
      let collection = await db.collection("devtracker");
      let result = await collection.insertOne(newtask);
      res.send(result).status(204);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error adding record");
    }
  };

export async function getAllTask(req, res){
  let collection = await db.collection("devtracker");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
};

export async function deleteTask(req, res){
    try {
      const query = { _id: req.body.id };
      const collection = db.collection("devtracker");
      let result = await collection.deleteOne(query);

      res.send(result).status(200);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error deleting record");
    }
};

export async function updateTask(req, res){
  try {
    const query = { _id: Number(req.body.id) };
    const updates = {
      $set: {
        description: req.body.description,
        notes: req.body.notes,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        closed: req.body.closed 
      },
    };


    const collection = db.collection("devtracker");
    let result = await collection.updateOne(query,updates);

    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting record");
  }
};

// Implement other CRUD operations (getBookById, updateBook, deleteBook) here...


// // This section will help you get a single record by id
// router.get("/:id", async (req, res) => {
//   let collection = await db.collection("records");
//   let query = { _id: new ObjectId(req.params.id) };
//   let result = await collection.findOne(query);

//   if (!result) res.send("Not found").status(404);
//   else res.send(result).status(200);
// });

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
// router.delete("/:id", async (req, res) => {
//   try {
//     const query = { _id: new ObjectId(req.params.id) };

//     const collection = db.collection("records");
//     let result = await collection.deleteOne(query);

//     res.send(result).status(200);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error deleting record");
//   }
// });