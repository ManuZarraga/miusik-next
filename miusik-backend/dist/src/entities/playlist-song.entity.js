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
exports.PlaylistSong = void 0;
const typeorm_1 = require("typeorm");
const playlist_entity_1 = require("./playlist.entity");
const song_entity_1 = require("./song.entity");
let PlaylistSong = class PlaylistSong {
    id;
    playlistId;
    songId;
    order;
    playlist;
    song;
    addedAt;
};
exports.PlaylistSong = PlaylistSong;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PlaylistSong.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'playlist_id', type: 'uuid' }),
    __metadata("design:type", String)
], PlaylistSong.prototype, "playlistId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'song_id', type: 'uuid' }),
    __metadata("design:type", String)
], PlaylistSong.prototype, "songId", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], PlaylistSong.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => playlist_entity_1.Playlist, (playlist) => playlist.playlistSongs, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'playlist_id' }),
    __metadata("design:type", playlist_entity_1.Playlist)
], PlaylistSong.prototype, "playlist", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => song_entity_1.Song, (song) => song.playlistSongs, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'song_id' }),
    __metadata("design:type", song_entity_1.Song)
], PlaylistSong.prototype, "song", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'added_at' }),
    __metadata("design:type", Date)
], PlaylistSong.prototype, "addedAt", void 0);
exports.PlaylistSong = PlaylistSong = __decorate([
    (0, typeorm_1.Entity)('playlist_songs'),
    (0, typeorm_1.Unique)(['playlistId', 'songId'])
], PlaylistSong);
//# sourceMappingURL=playlist-song.entity.js.map