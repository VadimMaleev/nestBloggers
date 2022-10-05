// import { UsersRepository } from "../users/users.repository";
// import { Injectable } from "@nestjs/common";
// import bcrypt from 'bcrypt'
//
// @Injectable()
// export class AuthService {
//   constructor(protected usersRepository: UsersRepository,
//               protected jwtService: JWTService) {
//   }
//
//   async generateHash(password: string) {
//     return await bcrypt.hash(password, 10)
//   }
//
//   async checkPassword (password: string, hash: string) {
//     return await bcrypt.compare(password, hash)
//   }
//   async createToken(login: string) {
//     const user = await this.usersRepository.findByLogin(login)
//     if (user === null) return null
//     const token = await this.jwtService.createJWT(user!)
//     return {"accessToken": token}
//   }
//   async createRefreshToken(login: string) {
//     const user = await this.usersRepository.findByLogin(login)
//     if (user === null) return null
//     return await this.jwtService.createRefreshJWT(user!)
//   }
// }