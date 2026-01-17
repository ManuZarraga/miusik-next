import { Playlist } from './playlist.entity';
import { FavoriteSong } from './favorite-song.entity';
export declare class User {
    id: string;
    email: string;
    name: string;
    avatarUrl: string;
    playlists: Playlist[];
    favoriteSongs: FavoriteSong[];
    createdAt: Date;
    updatedAt: Date;
}
