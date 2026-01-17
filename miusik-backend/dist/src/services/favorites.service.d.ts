import { Repository } from 'typeorm';
import { FavoriteSong } from '../entities/favorite-song.entity';
export declare class FavoritesService {
    private favoritesRepository;
    constructor(favoritesRepository: Repository<FavoriteSong>);
    getUserFavorites(userId: string): Promise<FavoriteSong[]>;
    addFavorite(userId: string, songId: string): Promise<FavoriteSong>;
    removeFavorite(userId: string, songId: string): Promise<void>;
    isFavorite(userId: string, songId: string): Promise<boolean>;
}
