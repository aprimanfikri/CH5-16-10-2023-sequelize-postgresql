const { User } = require("../models");
const imagekit = require("../lib/imagekit");
const ApiError = require("../utils/apiError");

const findUser = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).json({
      status: "Success",
      message: "Get all user data",
      data: {
        users,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const findUserById = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    if (!user) {
      return next(new ApiError("User Not Found", 404));
    }
    res.status(200).json({
      status: "Success",
      data: {
        user,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const updateUser = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return next(new ApiError("User Not Found", 404));
    }
    user.name = req.body.name;
    await user.save();
    res.status(200).json({
      status: "Success",
      message: "Update user success",
      data: user,
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return next(new ApiError("User Not Found", 404));
    }
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      status: "Success",
      message: "sukses delete user",
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

module.exports = {
  findUser,
  findUserById,
  updateUser,
  deleteUser,
};
