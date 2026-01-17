import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { FavoritesService } from '../services/favorites.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('favorites')
@UseGuards(AuthGuard)
export class FavoritesController {
  constructor(private favoritesService: FavoritesService) {}

  @Get()
  getUserFavorites(@Request() req) {
    return this.favoritesService.getUserFavorites(req.user.id);
  }

  @Post(':songId')
  addFavorite(@Request() req, @Param('songId') songId: string) {
    return this.favoritesService.addFavorite(req.user.id, songId);
  }

  @Delete(':songId')
  removeFavorite(@Request() req, @Param('songId') songId: string) {
    return this.favoritesService.removeFavorite(req.user.id, songId);
  }

  @Get(':songId/check')
  async isFavorite(@Request() req, @Param('songId') songId: string) {
    const isFavorite = await this.favoritesService.isFavorite(
      req.user.id,
      songId,
    );
    return { isFavorite };
  }
}
