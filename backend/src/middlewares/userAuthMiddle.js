const jwt = require("jsonwebtoken");
const {refTokens}= require("./../controllers/userControllers");
const userAuthMidd = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const refToken = req.headers.refreshtoken.split(" ")[1];

  jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
    console.log(err);
    if (err){

if(refTokens.includes(refToken)){
  console.log("salam")


  jwt.verify(refToken, process.env.REFRESH_TOKEN, (err, user) => {
  
    const token = jwt.sign(
      { password: user.password, userName: user.userName },
      process.env.SECRET_TOKEN
      ,
      {
        expiresIn: "10s",
      }
    );
  
    req.user = user;
    next();
  });

  return res.status(200).send({token,refToken})
}else{
  res.status(403).send(err);

}
      
    }
   
  });
};

module.exports = userAuthMidd;
