import { customError } from "../utils/errorHandler.util.js";
import { prisma } from "../utils/prisma/prisma.util.js";

const userProfile = async (req, res) => {
  const id = req.user.id;
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      email: true,
      username: true,
      createdAt: true,
      images: true,
    },
  });
  return res.status(200).json({
    success: true,
    data: user,
    message: "Your data successfully recieved!",
  });
};

const giveRoleToUser = async (req, res) => {
  const id = req.params.id;
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  if (!user) {
    return customError("There is no user with this id!", 404);
  } else if (user.role == "admin") {
    return customError("This user already has this role!", 409);
  }
  const updatedUser = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      role: "admin",
    },
    select: {
      id: true,
      email: true,
      username: true,
      createdAt: true,
      role: true,
      images: true,
    },
  });
  return res.status(200).json({
    success: true,
    data: updatedUser,
    message: "Your data successfully recieved!",
  });
};

const getUserImages = async (req, res) => {
  const userId = req.user.id;
  const images = await prisma.userImage.findMany({
    where: {
      userId: userId,
    },
    select: {
      id: true,
      url: true,
    },
  });
  return res.status(200).json({
    success: true,
    data: images,
    message: "Your data successfully recieved!",
  });
};

const postImageToUser = async (req, res) => {
  const id = req.user.id;
  const files = req.files;
  const selectedUser = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  if (!selectedUser) {
    return customError("There is no user with this id!", 404);
  } else if (!files || files.length === 0) {
    return customError("Please select at least a file!", 400);
  } else {
    console.log(files);
    const images = await Promise.all(
      files.map((file) => {
        return prisma.userImage.create({
          data: {
            url: `files/users/${file.filename}`,
            userId: id,
          },
        });
      }),
    );
    return res.status(201).json({
      success: true,
      data: files.map((file) => file.filename),
      message: "User images successfully created!",
    });
  }
};

const deleteUserImage = async (req, res) => {
  const userId = req.user.id;
  const id = req.params.id;
  const image = await prisma.userImage.findUnique({
    where: {
      id: id,
      userId: userId,
    },
  });
  if (!image) {
    return customError("There is no image with this id!", 404);
  }
  const deletedImage = await prisma.userImage.delete({
    where: {
      id: id,
      userId: userId,
    },
    select: {
      url: true,
    },
  });
  return res.status(200).json({
    success: true,
    data: deletedImage,
    message: "Your data successfully deleted!",
  });
};

const getUserFavorites = async (req, res) => {
  const userId = req.user.id;
  const userFavorites = await prisma.favorite.findMany({
    where: {
      userId: userId,
    },
    select: {
      product: true,
    },
  });
  return res.status(200).json({
    success: true,
    data: userFavorites,
    message: "Your data successfully recieved!",
  });
};

const postUserFavorite = async (req, res) => {
  const userId = req.user.id;
  const productId = req.params.id;
  const existingFavoriteRecord = await prisma.favorite.findFirst({
    where: {
      productId: productId,
      userId: userId,
    },
  });
  if (existingFavoriteRecord) {
    return customError("There is a favorite record exist with this data!", 409);
  }
  const selectedProduct = await prisma.product.findFirst({
    where: {
      id: productId,
    },
  });
  if (!selectedProduct) {
    return customError("There is no product with this id!", 404);
  }
  const userFavorite = await prisma.favorite.create({
    data: {
      productId: productId,
      userId: userId,
    },
  });
  return res.status(201).json({
    success: true,
    data: userFavorite,
    message: "The product successfully added to favorites!",
  });
};

const deleteUserFavorite = async (req, res) => {
  const userId = req.user.id;
  const productId = req.params.id;
  const selectedFavoriteProduct = await prisma.favorite.findFirst({
    where: {
      productId: productId,
      userId: userId,
    },
  });
  if (!selectedFavoriteProduct) {
    return customError("There is no favorite record with this id!", 404);
  }
  const deletedFavoriteProduct = await prisma.favorite.delete({
    where: {
      id: selectedFavoriteProduct.id,
    },
  });
  return res.status(200).json({
    success: true,
    data: deletedFavoriteProduct,
    message: "Your data successfully deleted!",
  });
};

export {
  userProfile,
  giveRoleToUser,
  getUserImages,
  postImageToUser,
  deleteUserImage,
  getUserFavorites,
  postUserFavorite,
  deleteUserFavorite,
};
