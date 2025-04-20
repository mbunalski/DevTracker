import Task from '../models/task.js';
import db from "../db/connection.js";
import { ObjectId } from 'mongodb';



export async function createTask(req, res) {
  try {
    const collection = await db.collection("devtracker");

    const newTask = {
      project: req.body.project,
      description: req.body.description,
      notes: req.body.notes,
      startDate: req.body.startDate,
      creationTime: new Date(),
      closed: req.body.closed
    };

    const result = await collection.insertOne(newTask);
    res.status(201).send(result); // 201 = created
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding record");
  }
}

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
        project: req.body.project,
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