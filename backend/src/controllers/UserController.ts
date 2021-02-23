import { Request, Response } from "express";
import { User } from "../models/User";

class UserController {
  async create(req: Request, res: Response) {
    const alreadyExists = User.findOne(req.body.email);
    if (alreadyExists) {
      return res.status(400).json({
        error: "Ja existe um usuario com esse email",
      });
    }
    const user = User.create(req.body);
    await User.save(user);
    return res.json(user);
  }
}

export default UserController;
