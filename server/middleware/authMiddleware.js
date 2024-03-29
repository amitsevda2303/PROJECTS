import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const authMiddleware = async (req, res, next) => {
  const token = req.header("token");
  if (!token)
    res.status(401).json({ success: false, res: "token not provided" });

  try {
    let decoded = jwt.verify(token, process.env.JWTSECERET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).send({ error: "please authenticate using valid token" });
  }
};