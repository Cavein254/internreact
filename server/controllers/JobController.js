export const createJob = async (req, res) => {
  const data = await req.body;
  try {
    const response = await prisma.job.create({
      data,
    });
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      msg: "error",
      error: err,
    });
  }
};
