const Room = require("./../model/roomModel");

const getAllData= async (req, res) => {
  const allData = await Room.find({});
  res.send(allData);
};

const getDataById = async (req, res) => {
  let id = req.params.id;
  let findData = await Room.findOne({ id: id });
  res.send(findData);
};

const getDeleteData = async (req, res) => {
  let id = req.params.id;
  let findUser = await User.findOne({ id: id });
  let _id = findUser._id;
  let deletedData = await Room.findByIdAndDelete(_id);
  res.send(deletedData);
};

const getUpdateData = async (req, res) => {
  let id = req.params.id;
  let updateData = await Room.findOneAndUpdate({ id: id }, req.body);
  res.send(updateData);
};

const getPutData = async (req, res) => {
  let id = req.params.id;
  let updateData = await Room.replaceOne({ id: id }, req.body);
  res.send(updateData);
};

const postData = async (req, res) => {
    const newData = new Room(req.body);
    newData.save();
    res.send(newData);
};

module.exports = {
  getAllData,
  getDataById,
  getDeleteData,
  getUpdateData,
  getPutData,
  postData,
};
