import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FavoriteSong } from '../entities/favorite-song.entity';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectRepository(FavoriteSong)
    private favoritesRepository: Repository<FavoriteSong>,
  ) {}

  async getUserFavorites(userId: string): Promise<FavoriteSong[]> {
    return this.favoritesRepository.find({
      where: { userId },
      relations: ['song'],
      order: { addedAt: 'DESC' },
    });
  }

  async addFavorite(userId: string, songId: string): Promise<FavoriteSong> {
    const favorite = this.favoritesRepository.create({ userId, songId });
    return this.favoritesRepository.save(favorite);
  }

  async removeFavorite(userId: string, songId: string): Promise<void> {
    await this.favoritesRepository.delete({ userId, songId });
  }

  async isFavorite(userId: string, songId: string): Promise<boolean> {
    const count = await this.favoritesRepository.count({
      where: { userId, songId },
    });
    return count > 0;
  }
}
