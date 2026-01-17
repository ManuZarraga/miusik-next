import { Playlist } from './playlist.entity';
import { Song } from './song.entity';
export declare class PlaylistSong {
    id: string;
    playlistId: string;
    songId: string;
    order: number;
    playlist: Playlist;
    song: Song;
    addedAt: Date;
}
