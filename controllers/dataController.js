import Todo from "../models/dataModel.js";
const insertData = (req, res) => {
  const { name, email, address } = req.body;
  const TodoDetails = new Todo({
    name,
    address,
  });
  TodoDetails
    .save()
    .then((data) =>{
         console.log(data);
    res.status(201).json({
        status:"success",
       messgae:"successfully added!",

    })
})
    .catch((err) => console.log(err, "error"));
};

const getData = async (req, res) => {
  try {
    const data = await Todo.find();
    res.json({
      status: "success",
      result: data.length,
      data,
    });
  } catch (e) {
    res.status(500).json({
      status: "error",
      message: e.messgae,
    });
  }
};
const getDatabyId = async (req, res) => {
  try {
    const data = await Todo.findById(req.params.id);
    res.json({
      status: "sucess",
      result: data.length,
      data,
    });
  } catch (e) {
    res.status(500).json({
      status: "error",
      message: e.message,
    });
  }
};
const updateById = async (req, res) => {
  try {
    await Todo.updateOne({ _id: req.params.id }, { $set: req.body });
    res.json({
      status: "success",
      mnessage: "successfully updated",
    });
  } catch (e) {
    res.status(500).json({
      status: "error",
      message: e.message,
    });
  }
};
const deleteById = async (req, res) => {
  try {
    await Todo.deleteOne({ _id: req.params.id });
    res.json({
      status: "success",
      messgae: "successfully deleted",
    });
  } catch (e) {
    res.status(501).json({
      status: "error",
      messgae: e.message,
    });
  }
};
export { insertData, getData, getDatabyId, updateById, deleteById };
