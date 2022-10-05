import {MongoClient, ObjectId} from "mongodb";
import mongoose from "mongoose";
import { BloggerClass, BloggerType, UserClass } from "./types";

const userSchema = new mongoose.Schema<UserClass> ({
    _id: ObjectId,
    accountData: {
        userName: String,
        email: String,
        passwordHash: String,
        createdAt: String
    },
    emailConfirmation: {
        confirmationCode: String,
        expirationDate: Date,
        isConfirmed: Boolean
    }
})

const bloggerSchema = new mongoose.Schema<BloggerClass>({
    id: String,
    name: String,
    youtubeUrl: String
})


export const UserModelClass = mongoose.model('users', userSchema)
export const BloggerModelClass = mongoose.model<BloggerClass>('bloggers', bloggerSchema)

