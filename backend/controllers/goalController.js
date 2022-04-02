const asyncHandler = require("express-async-handler");
//  @desc   get Goals
//  @route  GET /api/goals
//  @access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get goals",
  });
});

//  @desc   set Goals
//  @route  POST /api/goals
//  @access Private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({
    message: "Set goals",
  });
});

//  @desc   update Goals
//  @route  PUT /api/goals/:id
//  @access Private
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `update goal ${req.params.id}`,
  });
});

//  @desc   delete Goals
//  @route  DELETE /api/goals/:id
//  @access Private
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `delete goal ${req.params.id}`,
  });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
