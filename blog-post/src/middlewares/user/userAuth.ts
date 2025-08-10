import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { token } = req.body;
    if (!token) {
      return res.status(400).json({ error: "Token required." });
    }

    jwt.verify(token, process.env.DECODE_TOKEN || "pass");

    next();
  } catch (error) {
    // if (error.name === "TokenExpiredError") {
    //   return res.status(401).json({ error: "Token expired" });
    // }
    return res.status(500).json({
      error: "Internal server error.",
      details: error instanceof Error ? error.message : String(error),
    });
  }
};
