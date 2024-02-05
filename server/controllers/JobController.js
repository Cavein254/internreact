const createJob = async (req, res) => {
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

const getJobs = async (req, res) => {
  try {
    const response = await prisma.job.findMany({
      orderBy: {
        createdAt: "desc",
      },
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

const getJobDetails = async (req, res) => {
  const { id } = await req.body;
  try {
    const response = await prisma.job.findUnique({
      where: {
        id,
      },
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

module.exports = {
  getJobDetails,
  getJobs,
  createJob,
};
