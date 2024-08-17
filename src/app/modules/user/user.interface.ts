import { Model } from "mongoose"

export interface IUser {
    name: string
    email: string
    password: string
    phone: string
    address: string
    role: 'admin'| 'user'
}

export interface UserModel extends Model<IUser> {
    isPasswordMatched(
      planeTextPassword: string,
      hashedPassword: string,
    ): Promise<boolean>;
  }