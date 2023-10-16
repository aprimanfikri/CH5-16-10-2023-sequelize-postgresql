const { Shop } = require("../models");
const imagekit = require("../lib/imagekit");
const ApiError = require("../utils/apiError");

const createShop = async (req, res, next) => {
  try {
    const shop = await Shop.create(req.body);
    res.status(201).json({
      status: "Success",
      message: "Create new shop success",
      data: shop,
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const findShop = async (req, res, next) => {
  try {
    const shops = await Shop.findAll();
    res.status(200).json({
      status: "Success",
      message: "Get all shops data",
      data: {
        shops,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const findShopById = async (req, res, next) => {
  try {
    const shop = await Shop.findOne({ where: { id: req.params.id } });
    if (!shop) {
      return next(new ApiError("shop Not Found", 404));
    }
    res.status(200).json({
      status: "Success",
      data: {
        shop,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const updateShop = async (req, res, next) => {
  try {
    const shop = await Shop.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      status: "Success",
      message: "Update shop success",
      data: shop,
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const deleteShop = async (req, res, next) => {
  try {
    const shop = await Shop.findByPk(req.params.id);
    if (!shop) {
      return next(new ApiError("Shop Not Found", 404));
    }
    await shop.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      status: "Success",
      message: "sukses delete produk",
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

module.exports = {
  createShop,
  findShop,
  findShopById,
  updateShop,
  deleteShop,
};
