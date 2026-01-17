import { PlaylistSong } from './playlist-song.entity';
import { FavoriteSong } from './favorite-song.entity';
export declare class Song {
    id: string;
    title: string;
    artist: string;
    album: string;
    duration: number;
    fileUrl: string;
    coverUrl: string;
    genre: string;
    releaseYear: number;
    playlistSongs: PlaylistSong[];
    favoritedBy: FavoriteSong[];
    createdAt: Date;
    updatedAt: Date;
}
