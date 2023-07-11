import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// @desc    Auth user and get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
    res.send('auth user.');
});

// @desc    Register user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    res.send('register user.');
});