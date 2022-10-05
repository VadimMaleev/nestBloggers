import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
  Query
} from "@nestjs/common";
import { BloggersQueries, CreateBloggerInputModel } from "../dto/dto";
import { BloggersService } from "./bloggers.service";
import { NOTFOUND } from "dns";


@Controller('bloggers')
export class BloggersController {
  constructor(
    protected bloggersService: BloggersService/*,
    protected postsService: PostsService*/) {
  }

  @Get()
  @HttpCode(200)
  async getBloggers(@Query() queries: BloggersQueries) {
    const page = isNaN(Number(queries.PageNumber)) ? 1 : +queries.PageNumber!
    const pageSize = isNaN(Number(queries.PageSize)) ? 10 : +queries.PageSize!
    const name = queries.SearchNameTerm?.toString() || null

    return await this.bloggersService.findAllBloggers(name, page, pageSize)
  }

  @Get()
  @HttpCode(200)
  async getOneBlogger(@Param('id') id: string) {
    let blogger = await this.bloggersService.findBloggerById(id)
    if (blogger) {
      return blogger
    } else {
      throw new NotFoundException('Not Found 404')
    }
  }

  @Post()
  @HttpCode(201)
  async createBlogger(@Body() inputModel: CreateBloggerInputModel) {
    return await this.bloggersService.createBlogger(inputModel.name, inputModel.youtubeUrl)
  }

  @Delete()
  @HttpCode(204)
  async deleteBlogger(@Param('id') id: string) {
    const isDeleted = await this.bloggersService.deleteBlogger(id)
    if (!isDeleted) {
      throw new NotFoundException('Not Found 404')
    }
  }

  @Put()
  @HttpCode(204)
  async updateBlogger(@Param('id') id: string,
                      @Body() inputModel: CreateBloggerInputModel) {
    const isUpdated = await this.bloggersService.updateBlogger(id, inputModel.name, inputModel.youtubeUrl)
    if (isUpdated) {
      const blogger = await this.bloggersService.findBloggerById(id)
      return blogger
    } else {
      throw new NotFoundException('Not Found 404')
    }
  }
}