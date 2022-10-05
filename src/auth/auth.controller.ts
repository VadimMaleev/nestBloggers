// import { BadRequestException, Body, Controller, Injectable, Post } from "@nestjs/common";
// import { AuthService } from "./auth.service";
// import { UsersService } from "../users/users.service";
// import { LoginInputModel } from "../dto/dto";
//
// @Controller('auth')
//
// @Injectable()
// export class AuthController {
//   constructor(protected authService: AuthService,
//               protected usersService: UsersService,
//               protected jwtService: JWTService) {
//   }
//
// @Post()
//   async login(@Body() inputModel: LoginInputModel) {
//     const accessToken = await this.authService.createToken(inputModel.login)
//     const refreshToken = await this.authService.createRefreshToken(inputModel.login)
//     if (accessToken === null || refreshToken === null) {
//       throw new BadRequestException('Bad Request')
//     } else {
//       return res.status(200).cookie('refreshToken', refreshToken, {
//         httpOnly: true,
//         secure: true
//       }).send(accessToken)
//     }
//   }
//
//   async registration(req: Request, res: Response) {
//     const userEmail = await this.usersService.findUserByEmail(req.body.email)
//     const userLogin = await this.usersService.findUserByLogin(req.body.login)
//     if (userEmail) {
//       return res.status(400).send({errorsMessages: [{message: "user does exist", field: "email"}]})
//     }
//     if (userLogin) {
//       return res.status(400).send({errorsMessages: [{message: "user does exist", field: "login"}]})
//     }
//
//     const user = await this.usersService.createUser(req.body.login, req.body.password, req.body.email)
//     res.status(204).send(user)
//   }
//
//   async confirmation(req: Request, res: Response) {
//     const result = await this.usersService.confirmUser(req.body.code)
//     if (result) {
//       res.send(204)
//     } else {
//       res.status(400).send({
//         errorsMessages: [
//           {
//             message: "confirm code error",
//             field: "code"
//           }
//         ]
//       })
//     }
//   }
//
//   async emailResending(req: Request, res: Response) {
//     const user = await this.usersService.findUserByEmail(req.body.email)
//     if (user && user.emailConfirmation.isConfirmed) {
//       return res.status(400).send({errorsMessages: [{message: "user confirmed now", field: "email"}]})
//     }
//     if (!user) {
//       return res.status(400).send({errorsMessages: [{message: "email does not exist", field: "email"}]})
//     } else {
//       await this.usersService.createNewConfirmCode(user)
//       return res.sendStatus(204)
//     }
//   }
//
//   async createTokens(req: Request, res: Response) {
//     await this.jwtService.expireRefreshToken(req.cookies.refreshToken)
//     const accessToken = await this.authService.createToken(req.user!.accountData.userName)
//     const refreshToken = await this.authService.createRefreshToken(req.user!.accountData.userName)
//
//     if (accessToken === null || refreshToken === null) {
//       return res.sendStatus(400)
//     } else {
//       return res.status(200).cookie('refreshToken', refreshToken, {
//         httpOnly: true,
//         secure: true
//       }).send(accessToken)
//     }
//   }
//
//   async logout(req: Request, res: Response) {
//     await this.jwtService.expireRefreshToken(req.cookies.refreshToken)
//     return res.sendStatus(204)
//   }
//
//   async aboutMe(req: Request, res: Response) {
//     const user = {
//       email: req.user!.accountData.email,
//       login: req.user!.accountData.userName,
//       userId: req.user!._id
//     }
//     res.status(200).send(user)
//   }
// }