// import { Injectable } from "@nestjs/common";
// import { UserClass, UserDto } from "../types/types";
// import { UserModelClass } from "../types/schemas";
// import { ObjectId } from "mongodb";
//
// @Injectable()
// export class UsersRepository {
//   async forCount(): Promise<number> {
//     return UserModelClass.countDocuments()
//   }
//
//   async getAllUsers(page: number, pageSize: number): Promise<UserDto[]> {
//     const users = await UserModelClass.find({})
//       .skip(pageSize * (page - 1)).limit(pageSize).lean()
//     return users.map((u) => ({id: u._id, login: u.accountData.userName}))
//   }
//
//   async createUser(newUser: UserClass) {
//     const userInstance = new UserModelClass(newUser)
//     await userInstance.save()
//
//     return userInstance
//   }
//
//   async deleteUser(id:ObjectId): Promise<boolean> {
//     const userInstance =  await UserModelClass.findOne({_id: id})
//     if(!userInstance) return false
//
//     await userInstance.deleteOne()
//     return true
//   }
//
//   async findByLogin(login:string): Promise<UserClass | null> {
//     return UserModelClass.findOne({"accountData.userName":login})
//   }
//
//   async findUserById(userId: ObjectId): Promise<UserClass | null> {
//     return UserModelClass.findOne({_id: userId})
//   }
//   async findUserByCode(code: string): Promise<UserClass | null> {
//     return UserModelClass.findOne({"emailConfirmation.confirmationCode": code})
//   }
//   async updateConfirmation(id: ObjectId) {
//     const confirmationInstance =  await UserModelClass.findOne({_id: id})
//     if (!confirmationInstance) return false
//
//     confirmationInstance.emailConfirmation.isConfirmed = true
//
//     await confirmationInstance.save()
//     return true
//   }
//   async findUserByEmail(email: string): Promise<UserClass | null> {
//     return UserModelClass.findOne({"accountData.email": email})
//   }
//
//   async updateConfirmCode(user: UserClass, confirmCode: string, expirationDate: Date) {
//     const confirmationInstance = await UserModelClass.findOne({_id: user._id})
//     if (!confirmationInstance) return null
//
//     confirmationInstance.emailConfirmation.confirmationCode = confirmCode
//     confirmationInstance.emailConfirmation.expirationDate = expirationDate
//
//     await confirmationInstance.save()
//   }
// }