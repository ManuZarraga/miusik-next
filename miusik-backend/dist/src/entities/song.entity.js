"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Song = void 0;
const typeorm_1 = require("typeorm");
const playlist_song_entity_1 = require("./playlist-song.entity");
const favorite_song_entity_1 = require("./favorite-song.entity");
let Song = class Song {
    id;
    title;
    artist;
    album;
    duration;
    fileUrl;
    coverUrl;
    genre;
    releaseYear;
    playlistSongs;
    favoritedBy;
    createdAt;
    updatedAt;
};
exports.Song = Song;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Song.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Song.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Song.prototype, "artist", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Song.prototype, "album", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Song.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'file_url' }),
    __metadata("design:type", String)
], Song.prototype, "fileUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cover_url', nullable: true }),
    __metadata("design:type", String)
], Song.prototype, "coverUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Song.prototype, "genre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'release_year', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Song.prototype, "releaseYear", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => playlist_song_entity_1.PlaylistSong, (playlistSong) => playlistSong.song),
    __metadata("design:type", Array)
], Song.prototype, "playlistSongs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => favorite_song_entity_1.FavoriteSong, (favorite) => favorite.song),
    __metadata("design:type", Array)
], Song.prototype, "favoritedBy", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Song.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Song.prototype, "updatedAt", void 0);
exports.Song = Song = __decorate([
    (0, typeorm_1.Entity)('songs')
], Song);
//# sourceMappingURL=song.entity.js.map