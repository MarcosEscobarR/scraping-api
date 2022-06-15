import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import ormconfig from './ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      ...ormconfig,
      keepConnectionAlive: true,
      autoLoadEntities: true,
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
