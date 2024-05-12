import { Request, Response } from 'express';
import { UserLogIn } from './auth';
import User from "../../models/user";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { secretJwt } from "../../../variables";


export const logIn = async (req: Request, res: Response) => {
  let credentials: UserLogIn = req.body;

  try {
    credentials.email = credentials.email.toLowerCase().trim();

    const user = await User.findOne({
      where: {
        email: credentials.email
      }
    })

    if (!user) return res.status(401).send({ message: 'Email o contraseña inválidos.' });

    const match = await bcrypt.compare(credentials.password, user.dataValues.password);

    if (!match) return res.status(401).send({ message: 'Email o contraseña inválidos.' });

    const tokenjwt = jwt.sign(
      { id: user.dataValues.id, email: user.dataValues.email, name: user.dataValues.name },
      secretJwt
    );

    return res.json({ token: tokenjwt });
  } catch (e) {
    return res.status(400).send((e as Error).message);
  }
}
