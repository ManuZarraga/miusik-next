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
exports.Playlist = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const playlist_song_entity_1 = require("./playlist-song.entity");
let Playlist = class Playlist {
    id;
    name;
    description;
    coverUrl;
    isPublic;
    userId;
    user;
    playlistSongs;
    createdAt;
    updatedAt;
};
exports.Playlist = Playlist;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Playlist.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Playlist.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Playlist.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cover_url', nullable: true }),
    __metadata("design:type", String)
], Playlist.prototype, "coverUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_public', default: false }),
    __metadata("design:type", Boolean)
], Playlist.prototype, "isPublic", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id', type: 'uuid' }),
    __metadata("design:type", String)
], Playlist.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.playlists, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], Playlist.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => playlist_song_entity_1.PlaylistSong, (playlistSong) => playlistSong.playlist),
    __metadata("design:type", Array)
], Playlist.prototype, "playlistSongs", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Playlist.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Playlist.prototype, "updatedAt", void 0);
exports.Playlist = Playlist = __decorate([
    (0, typeorm_1.Entity)('playlists')
], Playlist);
//# sourceMappingURL=playlist.entity.js.map