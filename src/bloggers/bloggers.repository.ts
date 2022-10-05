import { BloggerModelClass } from "../types/schemas";
import { ObjectId } from "mongodb";
import { Injectable } from "@nestjs/common";
import { BloggerClass, BloggerType } from "../types/types";

@Injectable()
export class BloggersRepository {
  async forCount(name: string | null): Promise<number> {
    let count =  BloggerModelClass.count()
    if (name) {
      count = count.where("name").regex(name)
    }
    return count
  }

  async findAllBloggers(name: string | null, page: number, pageSize: number): Promise< BloggerClass[]> {
    let query = BloggerModelClass.find(name ? {name: {$regex: {name}}} : {}, {_id: 0, __v:0})
      .skip(pageSize * (page - 1)).limit(pageSize)
    // if (name) {
    //   query=query.where("name").regex(name)
    // }
    return query
  }

  async findBloggerById(id: string): Promise<BloggerClass | null> {
    return BloggerModelClass.findOne({id: id}, {_id: 0, __v:0})
  }

  async createBlogger(newBlogger: BloggerClass): Promise<BloggerClass> {
    const bloggerTypeDb = {
      _id: new ObjectId,
      ...newBlogger
    }
    const bloggerInstance = new BloggerModelClass(bloggerTypeDb)
    await bloggerInstance.save()
    return newBlogger
  }

  async deleteBlogger(id: string): Promise<boolean> {
    const bloggerInstance =  await BloggerModelClass.findOne({id: id})
    if(!bloggerInstance) return false
    await bloggerInstance.deleteOne()
    return true
  }

  async updateBlogger(id: string, name: string, youtubeUrl: string): Promise<boolean> {
    const bloggerInstance =  await BloggerModelClass.findOne({id: id})
    if (!bloggerInstance) return false
    bloggerInstance.name = name
    bloggerInstance.youtubeUrl = youtubeUrl
    await bloggerInstance.save()
    return true
  }
}

