import prisma from "../db/db.js";

export const getUserProfile = async (req, res) => {
  console.log("on get user");
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
  const udata = await res.body;
  try {
    const response = await prisma.profile.create({
      data: udata,
    });
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({
      msg: "error",
      error: err,
    });
  }
};
