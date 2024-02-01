export const createJob = async (req, res) => {
  const data = await req.body;
  try {
    const response = await prisma.job.create({
      data,
    });
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({
      msg: "error",
      error: err,
    });
  }
};
