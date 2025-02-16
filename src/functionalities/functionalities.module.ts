import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { SeedModule } from './seed/seed.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, RolesModule, SeedModule, AuthModule]
})
export class FunctionalitiesModule {}
