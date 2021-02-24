import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UsersRepository";

class UserController {
  async create(req: Request, res: Response) {
    const { email, name } = req.body;

    const userRepository = getCustomRepository(UserRepository);

    const alreadyExists = await userRepository.findOne({ email });
    console.log(email, name, alreadyExists);

    if (alreadyExists) {
      return res.status(400).json({
        error: "Ja existe um usuario com esse email",
      });
    }
    const user = userRepository.create({ email, name });
    await userRepository.save(user);
    return res.status(201).json(user);
  }
}

export default UserController;
