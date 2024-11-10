import jwt from "jsonwebtoken";
export const UserAuthorization = (req, res, next) => {
  const Auth = req.headers["authorization"];

  if (!Auth) {
    return res.json({ message: "Invalid authorization" });
  }
  try {
    const decoded = jwt.verify(Auth, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.json({ message: error.message });
  }
};
