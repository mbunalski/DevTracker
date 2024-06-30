import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  _id: {type: Number, required: true},
  project: { type: String, required: true },  
  description: { type: String, required: true },
  creationTime: { type: Date, required: true },
  startDate: { type: Date, default: null },
  endDate: { type: Date, default: null },
  notes: { type: String, default: null },
  closed: {type: Boolean, default: false}
});

const Task = mongoose.model('Task', taskSchema);
export default Task;