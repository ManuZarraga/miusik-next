import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Song } from '../entities/song.entity';

export class CreateSongDto {
  title: string;
  artist: string;
  album?: string;
  duration: number;
  fileUrl: string;
  coverUrl?: string;
  genre?: string;
  releaseYear?: number;
}

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private songsRepository: Repository<Song>,
  ) {}

  async findAll(): Promise<Song[]> {
    return this.songsRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string): Promise<Song | null> {
    return this.songsRepository.findOne({ where: { id } });
  }

  async create(createSongDto: CreateSongDto): Promise<Song> {
    const song = this.songsRepository.create(createSongDto);
    return this.songsRepository.save(song);
  }

  async search(query: string): Promise<Song[]> {
    return this.songsRepository.find({
      where: [
        { title: ILike(`%${query}%`) },
        { artist: ILike(`%${query}%`) },
        { album: ILike(`%${query}%`) },
      ],
    });
  }

  async findByGenre(genre: string): Promise<Song[]> {
    return this.songsRepository.find({ where: { genre } });
  }

  async update(id: string, updateData: Partial<Song>): Promise<Song | null> {
    await this.songsRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.songsRepository.delete(id);
  }
}
