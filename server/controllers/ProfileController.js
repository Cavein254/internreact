import prisma from "../db/db.js";
import bcrypt from "bcrypt";

export const getUserProfile = async (req, res) => {
  try {
    const response = await prisma.profile.findMany({});
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
    const response = await prisma.profile.create({
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
  const profile = await prisma.profile.findOne({
    where: {
      email,
    },
  });
  if (profile) {
    console.log(profile);
    res.status(200).json({
      profile,
    });
  }
};
