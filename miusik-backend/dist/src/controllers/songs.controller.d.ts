import { SongsService, CreateSongDto } from '../services/songs.service';
export declare class SongsController {
    private songsService;
    constructor(songsService: SongsService);
    findAll(): Promise<import("../entities/song.entity").Song[]>;
    search(query: string): Promise<import("../entities/song.entity").Song[]>;
    findByGenre(genre: string): Promise<import("../entities/song.entity").Song[]>;
    findOne(id: string): Promise<import("../entities/song.entity").Song | null>;
    create(createSongDto: CreateSongDto): Promise<import("../entities/song.entity").Song>;
    update(id: string, updateData: Partial<CreateSongDto>): Promise<import("../entities/song.entity").Song | null>;
    remove(id: string): Promise<void>;
}
