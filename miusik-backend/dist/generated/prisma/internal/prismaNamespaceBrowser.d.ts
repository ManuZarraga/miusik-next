import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: any;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: any;
export declare const JsonNull: any;
export declare const AnyNull: any;
export declare const ModelName: {
    readonly User: "User";
    readonly Song: "Song";
    readonly Playlist: "Playlist";
    readonly PlaylistSong: "PlaylistSong";
    readonly FavoriteSong: "FavoriteSong";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly name: "name";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SongScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly artist: "artist";
    readonly album: "album";
    readonly genre: "genre";
    readonly duration: "duration";
    readonly releaseYear: "releaseYear";
    readonly fileUrl: "fileUrl";
    readonly coverUrl: "coverUrl";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SongScalarFieldEnum = (typeof SongScalarFieldEnum)[keyof typeof SongScalarFieldEnum];
export declare const PlaylistScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly coverUrl: "coverUrl";
    readonly userId: "userId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PlaylistScalarFieldEnum = (typeof PlaylistScalarFieldEnum)[keyof typeof PlaylistScalarFieldEnum];
export declare const PlaylistSongScalarFieldEnum: {
    readonly id: "id";
    readonly playlistId: "playlistId";
    readonly songId: "songId";
    readonly order: "order";
    readonly addedAt: "addedAt";
};
export type PlaylistSongScalarFieldEnum = (typeof PlaylistSongScalarFieldEnum)[keyof typeof PlaylistSongScalarFieldEnum];
export declare const FavoriteSongScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly songId: "songId";
    readonly addedAt: "addedAt";
};
export type FavoriteSongScalarFieldEnum = (typeof FavoriteSongScalarFieldEnum)[keyof typeof FavoriteSongScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
