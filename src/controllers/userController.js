import { prisma } from "../utils/prisma/prisma.util.js";

const userProfile = async (req, res) => {
  const id = req.user.id;
  const user = await prisma.User.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      email: true,
      username: true,
      createdAt: true,
    },
  });
  return res.status(200).json({
    success: true,
    data: user,
    message: "Your data successfully recieved!",
  });
};

export { userProfile };
