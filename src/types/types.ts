import { ObjectId } from "mongodb";

export class BloggerClass {
  constructor(public  id:  string,
              public  name: string,
              public  youtubeUrl: string
  ) {     }
}

export type BloggerType = typeof BloggerClass


export class BloggerPagType {
  constructor(pagesCount: number,
              page: number,
              pageSize: number,
              totalCount: number,
              items: BloggerClass[]
  ) {     }
}


export type UserType = {
  id: ObjectId,
  login: string,
  email: string
}

export type UserDto = Omit<UserType, "email">

export type UserPagType = {
  pagesCount: number,
  page: number,
  pageSize: number,
  totalCount: number,
  items: UserDto[]
}

export class UserClass {
  constructor(
    public _id: ObjectId,
    public accountData: AccountData,
    public emailConfirmation: EmailConfirmation
  ) {     }
}


export class AccountData {
  constructor(public userName: string,
              public email : string,
              public passwordHash: string,
              public createdAt: string) {
  }
}

export class EmailConfirmation {
  constructor(public confirmationCode: string,
              public expirationDate: Date,
              public isConfirmed: boolean) {
  }
}