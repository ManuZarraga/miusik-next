import { Repository } from 'typeorm';
import { Song } from '../entities/song.entity';
export declare class CreateSongDto {
    title: string;
    artist: string;
    album?: string;
    duration: number;
    fileUrl: string;
    coverUrl?: string;
    genre?: string;
    releaseYear?: number;
}
export declare class SongsService {
    private songsRepository;
    constructor(songsRepository: Repository<Song>);
    findAll(): Promise<Song[]>;
    findOne(id: string): Promise<Song | null>;
    create(createSongDto: CreateSongDto): Promise<Song>;
    search(query: string): Promise<Song[]>;
    findByGenre(genre: string): Promise<Song[]>;
    update(id: string, updateData: Partial<Song>): Promise<Song | null>;
    remove(id: string): Promise<void>;
}
