import { User } from './user.entity';
import { PlaylistSong } from './playlist-song.entity';
export declare class Playlist {
    id: string;
    name: string;
    description: string;
    coverUrl: string;
    isPublic: boolean;
    userId: string;
    user: User;
    playlistSongs: PlaylistSong[];
    createdAt: Date;
    updatedAt: Date;
}
