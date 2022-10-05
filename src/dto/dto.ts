export class UsersQueries {
  PageNumber: string;
  PageSize: string
}

export class BloggersQueries {
  PageNumber: string;
  PageSize: string;
  SearchNameTerm: string
}

export type CreateUserInputModel = {
  login: string,
  email:string,
  password: string
}

export type LoginInputModel = {
  login: string
}

export type  CreateBloggerInputModel = {
  name: string,
  youtubeUrl: string

}