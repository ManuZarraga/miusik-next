"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.2.0",
    "engineVersion": "0c8ef2ce45c83248ab3df073180d5eda9e8be7a3",
    "activeProvider": "postgresql",
    "inlineSchema": "generator client {\n  provider = \"prisma-client\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel User {\n  id            String         @id @default(uuid())\n  email         String         @unique\n  name          String?\n  playlists     Playlist[]\n  favoriteSongs FavoriteSong[]\n  createdAt     DateTime       @default(now())\n  updatedAt     DateTime       @updatedAt\n\n  @@map(\"users\")\n}\n\nmodel Song {\n  id            String         @id @default(uuid())\n  title         String\n  artist        String\n  album         String?\n  genre         String\n  duration      Int // seconds\n  releaseYear   Int?\n  fileUrl       String // supabase storage URL\n  coverUrl      String? // cover image URL\n  playlistSongs PlaylistSong[]\n  favoritedBy   FavoriteSong[]\n  createdAt     DateTime       @default(now())\n  updatedAt     DateTime       @updatedAt\n\n  @@map(\"songs\")\n}\n\nmodel Playlist {\n  id            String         @id @default(uuid())\n  name          String\n  description   String?\n  coverUrl      String?\n  userId        String\n  user          User           @relation(fields: [userId], references: [id])\n  playlistSongs PlaylistSong[]\n  createdAt     DateTime       @default(now())\n  updatedAt     DateTime       @updatedAt\n\n  @@map(\"playlists\")\n}\n\nmodel PlaylistSong {\n  id         String   @id @default(uuid())\n  playlistId String\n  songId     String\n  order      Int      @default(0) // playlist order\n  addedAt    DateTime @default(now())\n\n  playlist Playlist @relation(fields: [playlistId], references: [id], onDelete: Cascade)\n  song     Song     @relation(fields: [songId], references: [id], onDelete: Cascade)\n\n  @@unique([playlistId, songId]) // with this, I avoid duplicate songs in the same playlist\n  @@map(\"playlist_songs\")\n}\n\nmodel FavoriteSong {\n  id      String   @id @default(uuid())\n  userId  String\n  songId  String\n  addedAt DateTime @default(now())\n\n  user User @relation(fields: [userId], references: [id], onDelete: Cascade)\n  song Song @relation(fields: [songId], references: [id], onDelete: Cascade)\n\n  @@unique([userId, songId])\n  @@map(\"favorite_songs\")\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"playlists\",\"kind\":\"object\",\"type\":\"Playlist\",\"relationName\":\"PlaylistToUser\"},{\"name\":\"favoriteSongs\",\"kind\":\"object\",\"type\":\"FavoriteSong\",\"relationName\":\"FavoriteSongToUser\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"users\"},\"Song\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"artist\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"album\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"genre\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"duration\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"releaseYear\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"fileUrl\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"coverUrl\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"playlistSongs\",\"kind\":\"object\",\"type\":\"PlaylistSong\",\"relationName\":\"PlaylistSongToSong\"},{\"name\":\"favoritedBy\",\"kind\":\"object\",\"type\":\"FavoriteSong\",\"relationName\":\"FavoriteSongToSong\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"songs\"},\"Playlist\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"coverUrl\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"PlaylistToUser\"},{\"name\":\"playlistSongs\",\"kind\":\"object\",\"type\":\"PlaylistSong\",\"relationName\":\"PlaylistToPlaylistSong\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"playlists\"},\"PlaylistSong\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"playlistId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"songId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"order\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"addedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"playlist\",\"kind\":\"object\",\"type\":\"Playlist\",\"relationName\":\"PlaylistToPlaylistSong\"},{\"name\":\"song\",\"kind\":\"object\",\"type\":\"Song\",\"relationName\":\"PlaylistSongToSong\"}],\"dbName\":\"playlist_songs\"},\"FavoriteSong\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"songId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"addedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"FavoriteSongToUser\"},{\"name\":\"song\",\"kind\":\"object\",\"type\":\"Song\",\"relationName\":\"FavoriteSongToSong\"}],\"dbName\":\"favorite_songs\"}},\"enums\":{},\"types\":{}}");
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_bg.postgresql.mjs"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_bg.postgresql.wasm-base64.mjs");
        return await decodeBase64AsWasm(wasm);
    }
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map