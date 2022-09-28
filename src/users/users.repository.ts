import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersRepository {
  findUsers (term: string) {
    return [{ id: 1, name: "vadim" }, { id: 2, name: "Julia" }]
      .filter((u) => !term || u.name.indexOf(term) > -1)

  }
}