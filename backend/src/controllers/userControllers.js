const User = require("./../model/userModel");
const jwt = require("jsonwebtoken");

const refTokens=[]

const login = async (req, res) => {
    const user = req.body;

   
    try {
      let findUser = await User.findOne({  userName:user.userName});
  
      if (findUser) {
       
        const token = jwt.sign(
          { password: user.password, userName: user.userName },
          process.env.SECRET_TOKEN
          ,
          {
            expiresIn: "10s",
          }
        );

        const refToken = jwt.sign(
          { password: user.password, userName: user.userName },
          process.env.REFRESH_TOKEN
        );
        refTokens.push(refToken)
  
        console.log("tokenlerrrrrr", refTokens)
        return res.status(200).send({token, refToken});
      } else {
        return res.status(201).send("dogru istifadeci adi ve ya sifre daxil edin");
      }
    } catch {
      (err) => {
        console.log(err);
        return err;
      };
    }
  };


const getAllUser = async (req, res) => {
  const allUser = await User.find({});
  res.send(allUser);
};

const getUserById = async (req, res) => {
  let id = req.params.id;
  let findUser = await User.findOne({ _id: id });
  res.send(findUser);
};

const getDeleteUser = async (req, res) => {
  let id = req.params.id;
  let deletedUser = await User.findByIdAndDelete({ _id: id });
  res.send(deletedUser);
};

const getUpdateUser = async (req, res) => {
  let id = req.params.id;
  let updateUser = await User.findOneAndUpdate({ _id: id }, req.body);

  res.send(updateUser);
};

const getPutUser = async (req, res) => {
  let id = req.params.id;
  let updateUser = await User.replaceOne({ _id: id }, req.body);
  res.send(updateUser);
};

const postUser = async (req, res) => {
  try {
    let found = await User.findOne({
        userName: req.body.userName,
       email: req.body.email,

    });

    if (found) {
      res.status(201).send("This email or username is exist");
    }else {
      const newUser = new User(req.body);
      newUser.save();
      res.send(newUser);
      res.status(200).send({ message: "User registered successfully" });
    }
  } catch {
    (err) => {
      console.log(err);
      return err;
    };
  }
};

module.exports = {
  getAllUser,
  getUserById,
  getDeleteUser,
  getUpdateUser,
  getPutUser,
  postUser,
  login,
  refTokens,
};
