import mongoose from "mongoose";
import express from "express";
import router from "./routes/dataRoute.js";
mongoose
  .connect(
    "mongodb+srv://swethak:Swetha240@cluster0.1xjubpd.mongodb.net/E-com-website?retryWrites=true&w=majority"
  )
  .then((con) => console.log("data connection established"))
  .catch((err) => console.log("failed"));
mongoose.set("strictQuery", false);
const app = express();
app.use(express.json());
app.use(router);
app.listen(4000, () => console.log("listening to port 4k..."));
