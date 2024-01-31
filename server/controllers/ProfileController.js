import prisma from "../db/db.js";
import bcrypt from "bcrypt";

export const getUserProfile = async (req, res) => {
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

export const createUserProfile = async (req, res) => {
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

export const loginUserProfile = async (req, res) => {
  const { email, password } = await req.body;
  const response = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  console.log(response);
  if (!response) {
    res.json({
      status: 500,
      payload: "This email is not registed. Please create an account",
    });
    return;
  }
  const { password: hash } = await response;
  if (!bcrypt.compareSync(password, hash)) {
    res.json({
      status: 500,
      payload: "Incorrect Password",
    });
  }
  res.json({
    status: 200,
    payload: response,
  });
};
