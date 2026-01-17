import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Put,
  Delete,
} from '@nestjs/common';
import { SongsService, CreateSongDto } from '../services/songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get('search')
  search(@Query('q') query: string) {
    return this.songsService.search(query);
  }

  @Get('genre/:genre')
  findByGenre(@Param('genre') genre: string) {
    return this.songsService.findByGenre(genre);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.songsService.findOne(id);
  }

  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    return this.songsService.create(createSongDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<CreateSongDto>) {
    return this.songsService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.songsService.remove(id);
  }
}
