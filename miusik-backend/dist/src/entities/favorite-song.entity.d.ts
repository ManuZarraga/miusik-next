import { User } from './user.entity';
import { Song } from './song.entity';
export declare class FavoriteSong {
    id: string;
    userId: string;
    songId: string;
    user: User;
    song: Song;
    addedAt: Date;
}
