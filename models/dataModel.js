import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
 name: {
    type: String,
    required: [true, "Name is mandatory"],
    unique: true,
  },
 /*email: {
    type: String,
    
  },*/
address: {
    type: String,
  },
});
const Todo= mongoose.model("todo", productSchema, "todos");
export default Todo;
