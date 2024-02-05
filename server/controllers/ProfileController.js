const prisma = require("../db/db.js");
const bcrypt = require("bcrypt");

const getUserProfile = async (req, res) => {
  try {
    const response = await prisma.user.findMany({});
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({
      msg: "error",
      error: err,
    });
  }
};

const createUserProfile = async (req, res) => {
  const { fName, lName, email, gender, phone, dob, password } = await req.body;
  const hash = await bcrypt.hashSync(password, 10);
  const udata = {
    fName,
    lName,
    email,
    gender,
    phone,
    dob,
    password: hash,
  };

  try {
    const response = await prisma.user.create({
      data: udata,
    });
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "error",
    });
  }
};

const loginUserProfile = async (req, res) => {
  const { email, password } = await req.body;
  const response = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!response) {
    return res.json({
      status: 500,
      payload: "This email is not registed. Please create an account",
    });
  }
  const { password: hash } = await response;
  if (!bcrypt.compareSync(password, hash)) {
    return res.json({
      status: 500,
      payload: "Incorrect Password",
    });
  }
  return res.json({
    status: 200,
    payload: response,
  });
};

module.exports = {
  loginUserProfile,
  createUserProfile,
  getUserProfile,
};
