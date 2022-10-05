import { Injectable } from "@nestjs/common";
import { BloggersRepository } from "./bloggers.repository";
import { BloggerClass, BloggerPagType} from "../types/types";

@Injectable()
export class BloggersService {
  constructor(protected bloggersRepository: BloggersRepository) {
  }

  async findAllBloggers(name: string | null, page: number, pageSize: number): Promise<BloggerPagType> {
    const pagesCount = Math.ceil(await this.bloggersRepository.forCount(name)/ pageSize)
    const totalCount = await this.bloggersRepository.forCount(name)
    return {
      pagesCount: pagesCount,
      page: page,
      pageSize: pageSize,
      totalCount: totalCount,
      items: await this.bloggersRepository.findAllBloggers(name, page, pageSize)
    }
  }

  async findBloggerById (id: string): Promise<BloggerClass | null> {
    return await this.bloggersRepository.findBloggerById(id)
  }

  async createBlogger (name: string, youtubeUrl: string): Promise<BloggerClass> {
    const newBlogger = new BloggerClass(
      (+(new Date())).toString(),
      name,
      youtubeUrl
    )
    return await this.bloggersRepository.createBlogger(newBlogger)
  }

  async deleteBlogger (id:string): Promise<boolean> {
    return await this.bloggersRepository.deleteBlogger(id)
  }

  async updateBlogger (id:string, name: string, youtubeUrl: string): Promise<boolean> {
    return await this.bloggersRepository.updateBlogger(id, name, youtubeUrl)

  }
}

