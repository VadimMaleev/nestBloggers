import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from "./users/users.controller";
import { UsersService } from "./users/users.service";
import { UsersRepository } from "./users/users.repository";
import { AuthService } from "./auth/auth.service";
import { EmailAdapter } from "./adapters/email-adapter";

@Module({
  imports: [],
  controllers: [AppController, UsersController],
  providers: [AppService,UsersService, UsersRepository, AuthService, EmailAdapter],
})
export class AppModule {}
