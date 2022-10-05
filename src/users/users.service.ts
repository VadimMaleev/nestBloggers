// import { Injectable } from "@nestjs/common";
// import { UsersRepository } from "./users.repository";
// import { AccountData, EmailConfirmation, UserClass, UserDto, UserPagType } from "../types/types";
// import { ObjectId } from "mongodb";
// import {v4 as uuidv4} from 'uuid'
// import add from 'date-fns/add'
// import { AuthService } from "../auth/auth.service";
// import { EmailAdapter } from "../adapters/email-adapter";
//
// @Injectable()
// export class UsersService {
//   constructor(protected usersRepository: UsersRepository,
//               protected authService: AuthService,
//               protected emailAdapter: EmailAdapter) {
//   }
//
//   async getAllUsers(page: number, pageSize: number): Promise<UserPagType> {
//     const pagesCount = Math.ceil(await this.usersRepository.forCount() / pageSize)
//     const totalCount = await this.usersRepository.forCount()
//
//     return {
//       pagesCount: pagesCount,
//       page: page,
//       pageSize: pageSize,
//       totalCount: totalCount,
//       items: await this.usersRepository.getAllUsers(page, pageSize)
//     }
//   }
//
//   async createUser(login: string, password: string, email: string): Promise<UserDto | null> {
//     const hash = await this.authService.generateHash(password)
//     const newUser = new UserClass(
//       new ObjectId(),
//       new AccountData(login,
//         email,
//         hash,
//         new Date().toString()),
//
//       new EmailConfirmation(uuidv4(),
//         add(new Date(), { hours: 3 }),
//         false)
//     )
//     await this.usersRepository.createUser(newUser)
//     const userDto = {
//       id: newUser._id,
//       login: newUser.accountData.userName
//     }
//     await this.emailAdapter.sendEmailConfirmationCode(newUser.emailConfirmation.confirmationCode, newUser.accountData.email)
//     return userDto
//   }
//
//   async deleteUser(id: ObjectId): Promise<boolean> {
//     return await this.usersRepository.deleteUser(id)
//   }
// }