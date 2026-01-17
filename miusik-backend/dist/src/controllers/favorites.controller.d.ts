import { FavoritesService } from '../services/favorites.service';
export declare class FavoritesController {
    private favoritesService;
    constructor(favoritesService: FavoritesService);
    getUserFavorites(req: any): Promise<import("../entities/favorite-song.entity").FavoriteSong[]>;
    addFavorite(req: any, songId: string): Promise<import("../entities/favorite-song.entity").FavoriteSong>;
    removeFavorite(req: any, songId: string): Promise<void>;
    isFavorite(req: any, songId: string): Promise<{
        isFavorite: boolean;
    }>;
}
