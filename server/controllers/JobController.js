export const createJob = async (req, res) => {
  const data = await req.body;
  console.log("on route");
  console.log(data);
  try {
    const response = await prisma.job.create({
      data,
    });
    console.log("000000000000");
    console.log(response);
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      msg: "error",
      error: err,
    });
  }
};
