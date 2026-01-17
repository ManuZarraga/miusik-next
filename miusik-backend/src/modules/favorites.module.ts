import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoritesService } from '../services/favorites.service';
import { FavoritesController } from '../controllers/favorites.controller';
import { FavoriteSong } from '../entities/favorite-song.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteSong]), AuthModule],
  controllers: [FavoritesController],
  providers: [FavoritesService],
})
export class FavoritesModule {}
