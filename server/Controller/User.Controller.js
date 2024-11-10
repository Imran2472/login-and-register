import User from "../Models/User.Model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
export const Register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.json({ Message: "User already exists", success: false });
    }
    const hashpassword = await bcrypt.hash(password, 8);
    const newUser = new User({
      username,
      password: hashpassword,
      email,
    });
    await newUser.save();
    res.json({ message: "User Register Successfully", newUser, success: true });
  } catch (error) {
    res.json({ message: error.message, success: false });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Invalid email" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ message: "Invalid password" });
    }
    const JwtToken = jwt.sign(
      {
        email,
        name: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "48h",
      }
    );
    res.json({
      message: `Wellcome ${user.username}`,
      JwtToken,
      email,
      name: user.username,
      success: true,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const Profile = async (req, res) => {
  try {
    res.json({
      user: req.user,
    });
  } catch (error) {
    res.json({ message: "Login Error", error });
  }
};

export const ForgetPassword = async (req, res) => {
  const { email, newPassowrd } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "User not found" });
    }
    const hashed = await bcrypt.hash(newPassowrd, 8);
    await User.findByIdAndUpdate(user._id, { password: hashed });
    res.json({
      message: "Password reset successfully",
      success: true,
    });
  } catch (error) {
    res.json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
