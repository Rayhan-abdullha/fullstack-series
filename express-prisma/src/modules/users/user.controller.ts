import express from "express";
import { prisma } from "../../lib/prisma";
class UserController {
  async registerUser(req: express.Request, res: express.Response) {
    const { name, email, password } = req.body;
    try {
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password,
        },
      });
      res.status(201).json({
        message: `User registered successfully!`,
        data: newUser,
        status: 201,
      });
    } catch (error: any) {
      res.status(500).json({
        message: "Error registering user",
        error: error.message,
        status: 500,
      });
    }
  }
}

export default new UserController();
