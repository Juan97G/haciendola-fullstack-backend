import { Request, Response } from "express";
import { UpdatePassword } from "./user";
import User from "../../models/user";
import bcrypt from 'bcryptjs';


export const updatePassword = async (req: Request, res: Response) => {
   const { email, oldPassword, password }: UpdatePassword = req.body;

   try {
      const user = await User.findOne({
         where: {
            email
         }
      })

      const match = await bcrypt.compare(oldPassword, user?.dataValues.password!);

      if (!match) return res.status(401).json({ message: 'La contraseña actual no coincide.' });

      if (match) {
         const newPassword = await bcrypt.hash(password, 10);

         const updated = await user?.update({
            password: newPassword,
         });

         if (updated)
            return res.status(200).send({ message: 'Contraseña actualizada correctamente.' });
         else
            return res.status(400).send({ message: 'Se ha presentado un error al actualizar la contraseña.' });
      }
   } catch (e) {
      return res.status(400).send((e as Error).message);
   }
}
