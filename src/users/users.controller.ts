// import { BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query } from "@nestjs/common";
// import { UsersService } from "./users.service";
// import { ObjectId } from "mongodb";
// import { CreateUserInputModel, UsersQueries } from "../dto/dto";
//
//
// @Controller('users')
// export class UsersController {
//   constructor(protected usersService: UsersService) {
//   }
//   @Get()
//   async getAllUsers(@Query() queries: UsersQueries) {
//     const page = isNaN(Number(queries.PageNumber)) ? 1 : +queries.PageNumber!
//     const pageSize = isNaN(Number(queries.PageSize)) ? 10 : +queries.PageSize!
//
//     return await this.usersService.getAllUsers(page, pageSize)
//   }
//
//   @Post()
//   async createUser(@Body() inputModel: CreateUserInputModel) {
//     return await this.usersService.createUser(inputModel.login, inputModel.password, inputModel.email)
//   }
//
//   @Delete(':id')
//   @HttpCode(204)
//   async deleteUser(@Param('id') id: string) {
//     const userId = new ObjectId(id)
//     const isDeleted = await this.usersService.deleteUser(userId)
//     if (!isDeleted) {
//       throw new BadRequestException('Bad Request')
//     }
//   }
// }
//
//
