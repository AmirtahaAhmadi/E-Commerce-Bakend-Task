import { customError } from "../utils/errorHandler.util.js";
import { prisma } from "../utils/prisma/prisma.util.js";

const getAllProducts = async (req, res) => {
  const products = await prisma.product.findMany({});
  return res.status(200).json({
    success: true,
    data: products,
    message: "Products",
  });
};

const getProductDetails = async (req, res) => {
  const id = req.params.id;
  const selectedProduct = await prisma.product.findUnique({
    where: {
      id: id,
    },
    include: {
      images: true,
    },
  });
  if (!selectedProduct) {
    return customError("There is no Product with this id!", 404);
  }
  return res.status(200).json({
    success: true,
    data: selectedProduct,
    message: "Product details successfully recived!",
  });
};

const getProductsByCategoryId = async (req, res) => {
  const categoryId = req.params.id;
  const selectedCategory = await prisma.category.findUnique({
    where: {
      id: categoryId,
    },
  });
  if (!selectedCategory) {
    return customError("There is no category with this id!", 404);
  }
  const products = await prisma.product.findMany({
    where: {
      categoryId: categoryId,
    },
  });
  return res.status(200).json({
    success: true,
    data: products,
    message: "Category products successfully recived!",
  });
};

const createProduct = async (req, res) => {
  const { title, price, stock, description, categoryId } = req.body;
  const product = await prisma.product.create({
    data: {
      title: title,
      price: Number(price),
      stock: Number(stock),
      description: description,
      categoryId: categoryId,
    },
  });
  return res.status(201).json({
    success: true,
    data: product,
    message: "Product successfully created!",
  });
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const selectedProduct = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });
  if (!selectedProduct) {
    return customError("There is no Product with this id!", 404);
  }
  const updatedProduct = await prisma.product.update({
    where: {
      id: id,
    },
    data: {
      title: title,
    },
  });
  return res.status(200).json({
    success: true,
    data: updatedProduct,
    message: "Product successfully updated!",
  });
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const selectedProduct = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });
  if (!selectedProduct) {
    return customError("There is no product with this id!", 404);
  }
  const deletedProduct = await prisma.product.delete({
    where: {
      id: id,
    },
  });
  return res.status(200).json({
    success: true,
    data: deletedProduct,
    message: "Product successfully deleted!",
  });
};

const postImageToProduct = async (req, res) => {
  const id = req.params.id;
  const files = req.files;
  const selectedProduct = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });
  if (!selectedProduct) {
    return customError("There is no product with this id!", 404);
  } else if (!files || files.length === 0) {
    return customError("Please select at least a file!", 400);
  } else {
    const images = await Promise.all(
      files.map((file) => {
        return prisma.productImage.create({
          data: {
            url: `files/products/${file.filename}`,
            productId: id,
          },
        });
      }),
    );
    return res.status(201).json({
      success: true,
      data: files.map((file) => file.filename),
      message: "Product images successfully created!",
    });
  }
};

export {
  getAllProducts,
  getProductDetails,
  getProductsByCategoryId,
  createProduct,
  updateProduct,
  deleteProduct,
  postImageToProduct,
};
