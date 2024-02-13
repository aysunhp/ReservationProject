const Hotel = require("./../model/hotelModel");



const getAllData= async (req, res) => {
  const allData = await Hotel.find({});
  res.send(allData);
};

const getDataById = async (req, res) => {
  let id = req.params.id;
  let findData = await Hotel.findOne({ _id: id });
  res.send(findData);
};

const getDeleteData = async (req, res) => {
  let id = req.params.id;
  let deletedData = await Hotel.findByIdAndDelete({ _id: id });
  res.send(deletedData);
};

const getUpdateData = async (req, res) => {
  let id = req.params.id;
  let updateData = await Hotel.findOneAndUpdate({ _id: id }, req.body);

  res.send(updateData);
};

const getPutData = async (req, res) => {
  let id = req.params.id;
  let updateData = await Hotel.replaceOne({ _id: id }, req.body);
  res.send(updateData);
};

const postData = async (req, res) => {
    const newData = new Hotel(req.body);
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
