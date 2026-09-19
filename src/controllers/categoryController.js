import { customError } from "../utils/errorHandler.util.js";
import { prisma } from "../utils/prisma/prisma.util.js";

const getAllCategories = async (req, res) => {
  const categories = await prisma.category.findMany({});
  return res.status(200).json({
    success: true,
    data: categories,
    message: "Categories",
  });
};

const getCategoryDetails = async (req, res) => {
  const id = req.params.id;
  const selectedCategory = await prisma.category.findFirst({
    where: {
      id: id,
    },
    include: {
      products: true,
    },
  });
  if (!selectedCategory) {
    return customError("There is no category with this id!", 404);
  } else {
    return res.status(200).json({
      success: true,
      data: selectedCategory,
      message: "Category details successfully recived!",
    });
  }
};

const createCategory = async (req, res) => {
  const name = req.body.name;
  const existingCategory = await prisma.category.findUnique({
    where: {
      name: name,
    },
  });
  if (existingCategory) {
    return customError(
      "There is a category exist with this name! Please enter unique name",
      409,
    );
  }
  const category = await prisma.category.create({
    data: {
      name: name,
    },
  });
  return res.status(201).json({
    success: true,
    data: category,
    message: "Category successfully created!",
  });
};

const updateCategory = async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const existingCategory = await prisma.category.findUnique({
    where: {
      name: name,
    },
  });
  if (existingCategory) {
    return customError(
      "There is a category exist with this name! Please enter unique name",
      409,
    );
  }
  const selectedCategory = await prisma.category.update({
    where: {
      id: id,
    },
    data: {
      name: name,
    },
  });
  if (!selectedCategory) {
    return customError("There is no category with this id!", 404);
  } else {
    return res.status(200).json({
      success: true,
      data: selectedCategory,
      message: "Category successfully updated!",
    });
  }
};

const deleteCategory = async (req, res) => {
  const id = req.params.id;
  const selectedCategory = await prisma.category.delete({
    where: {
      id: id,
    },
  });
  if (!selectedCategory) {
    return customError("There is no category with this id!", 404);
  } else {
    return res.status(200).json({
      success: true,
      data: selectedCategory,
      message: "Category successfully deleted!",
    });
  }
};

export {
  getAllCategories,
  getCategoryDetails,
  createCategory,
  updateCategory,
  deleteCategory,
};
