import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  Unique,
} from 'typeorm';
import { User } from './user.entity';
import { Song } from './song.entity';

@Entity('favorite_songs')
@Unique(['userId', 'songId'])
export class FavoriteSong {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id', type: 'uuid' })
  userId: string;

  @Column({ name: 'song_id', type: 'uuid' })
  songId: string;

  @ManyToOne(() => User, (user) => user.favoriteSongs, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Song, (song) => song.favoritedBy, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'song_id' })
  song: Song;

  @CreateDateColumn({ name: 'added_at' })
  addedAt: Date;
}
