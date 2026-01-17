import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { PlaylistSong } from './playlist-song.entity';
import { FavoriteSong } from './favorite-song.entity';

@Entity('songs')
export class Song {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  artist: string;

  @Column({ nullable: true })
  album: string;

  @Column('int')
  duration: number; // en segundos

  @Column({ name: 'file_url' })
  fileUrl: string;

  @Column({ name: 'cover_url', nullable: true })
  coverUrl: string;

  @Column({ nullable: true })
  genre: string;

  @Column({ name: 'release_year', type: 'int', nullable: true })
  releaseYear: number;

  @OneToMany(() => PlaylistSong, (playlistSong) => playlistSong.song)
  playlistSongs: PlaylistSong[];

  @OneToMany(() => FavoriteSong, (favorite) => favorite.song)
  favoritedBy: FavoriteSong[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
