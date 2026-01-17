import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SongModel = runtime.Types.Result.DefaultSelection<Prisma.$SongPayload>;
export type AggregateSong = {
    _count: SongCountAggregateOutputType | null;
    _avg: SongAvgAggregateOutputType | null;
    _sum: SongSumAggregateOutputType | null;
    _min: SongMinAggregateOutputType | null;
    _max: SongMaxAggregateOutputType | null;
};
export type SongAvgAggregateOutputType = {
    duration: number | null;
    releaseYear: number | null;
};
export type SongSumAggregateOutputType = {
    duration: number | null;
    releaseYear: number | null;
};
export type SongMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    artist: string | null;
    album: string | null;
    genre: string | null;
    duration: number | null;
    releaseYear: number | null;
    fileUrl: string | null;
    coverUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SongMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    artist: string | null;
    album: string | null;
    genre: string | null;
    duration: number | null;
    releaseYear: number | null;
    fileUrl: string | null;
    coverUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SongCountAggregateOutputType = {
    id: number;
    title: number;
    artist: number;
    album: number;
    genre: number;
    duration: number;
    releaseYear: number;
    fileUrl: number;
    coverUrl: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SongAvgAggregateInputType = {
    duration?: true;
    releaseYear?: true;
};
export type SongSumAggregateInputType = {
    duration?: true;
    releaseYear?: true;
};
export type SongMinAggregateInputType = {
    id?: true;
    title?: true;
    artist?: true;
    album?: true;
    genre?: true;
    duration?: true;
    releaseYear?: true;
    fileUrl?: true;
    coverUrl?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SongMaxAggregateInputType = {
    id?: true;
    title?: true;
    artist?: true;
    album?: true;
    genre?: true;
    duration?: true;
    releaseYear?: true;
    fileUrl?: true;
    coverUrl?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SongCountAggregateInputType = {
    id?: true;
    title?: true;
    artist?: true;
    album?: true;
    genre?: true;
    duration?: true;
    releaseYear?: true;
    fileUrl?: true;
    coverUrl?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SongAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SongWhereInput;
    orderBy?: Prisma.SongOrderByWithRelationInput | Prisma.SongOrderByWithRelationInput[];
    cursor?: Prisma.SongWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SongCountAggregateInputType;
    _avg?: SongAvgAggregateInputType;
    _sum?: SongSumAggregateInputType;
    _min?: SongMinAggregateInputType;
    _max?: SongMaxAggregateInputType;
};
export type GetSongAggregateType<T extends SongAggregateArgs> = {
    [P in keyof T & keyof AggregateSong]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSong[P]> : Prisma.GetScalarType<T[P], AggregateSong[P]>;
};
export type SongGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SongWhereInput;
    orderBy?: Prisma.SongOrderByWithAggregationInput | Prisma.SongOrderByWithAggregationInput[];
    by: Prisma.SongScalarFieldEnum[] | Prisma.SongScalarFieldEnum;
    having?: Prisma.SongScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SongCountAggregateInputType | true;
    _avg?: SongAvgAggregateInputType;
    _sum?: SongSumAggregateInputType;
    _min?: SongMinAggregateInputType;
    _max?: SongMaxAggregateInputType;
};
export type SongGroupByOutputType = {
    id: string;
    title: string;
    artist: string;
    album: string | null;
    genre: string;
    duration: number;
    releaseYear: number | null;
    fileUrl: string;
    coverUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: SongCountAggregateOutputType | null;
    _avg: SongAvgAggregateOutputType | null;
    _sum: SongSumAggregateOutputType | null;
    _min: SongMinAggregateOutputType | null;
    _max: SongMaxAggregateOutputType | null;
};
type GetSongGroupByPayload<T extends SongGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SongGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SongGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SongGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SongGroupByOutputType[P]>;
}>>;
export type SongWhereInput = {
    AND?: Prisma.SongWhereInput | Prisma.SongWhereInput[];
    OR?: Prisma.SongWhereInput[];
    NOT?: Prisma.SongWhereInput | Prisma.SongWhereInput[];
    id?: Prisma.StringFilter<"Song"> | string;
    title?: Prisma.StringFilter<"Song"> | string;
    artist?: Prisma.StringFilter<"Song"> | string;
    album?: Prisma.StringNullableFilter<"Song"> | string | null;
    genre?: Prisma.StringFilter<"Song"> | string;
    duration?: Prisma.IntFilter<"Song"> | number;
    releaseYear?: Prisma.IntNullableFilter<"Song"> | number | null;
    fileUrl?: Prisma.StringFilter<"Song"> | string;
    coverUrl?: Prisma.StringNullableFilter<"Song"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Song"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Song"> | Date | string;
    playlistSongs?: Prisma.PlaylistSongListRelationFilter;
    favoritedBy?: Prisma.FavoriteSongListRelationFilter;
};
export type SongOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    artist?: Prisma.SortOrder;
    album?: Prisma.SortOrderInput | Prisma.SortOrder;
    genre?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    releaseYear?: Prisma.SortOrderInput | Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    coverUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    playlistSongs?: Prisma.PlaylistSongOrderByRelationAggregateInput;
    favoritedBy?: Prisma.FavoriteSongOrderByRelationAggregateInput;
};
export type SongWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SongWhereInput | Prisma.SongWhereInput[];
    OR?: Prisma.SongWhereInput[];
    NOT?: Prisma.SongWhereInput | Prisma.SongWhereInput[];
    title?: Prisma.StringFilter<"Song"> | string;
    artist?: Prisma.StringFilter<"Song"> | string;
    album?: Prisma.StringNullableFilter<"Song"> | string | null;
    genre?: Prisma.StringFilter<"Song"> | string;
    duration?: Prisma.IntFilter<"Song"> | number;
    releaseYear?: Prisma.IntNullableFilter<"Song"> | number | null;
    fileUrl?: Prisma.StringFilter<"Song"> | string;
    coverUrl?: Prisma.StringNullableFilter<"Song"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Song"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Song"> | Date | string;
    playlistSongs?: Prisma.PlaylistSongListRelationFilter;
    favoritedBy?: Prisma.FavoriteSongListRelationFilter;
}, "id">;
export type SongOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    artist?: Prisma.SortOrder;
    album?: Prisma.SortOrderInput | Prisma.SortOrder;
    genre?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    releaseYear?: Prisma.SortOrderInput | Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    coverUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SongCountOrderByAggregateInput;
    _avg?: Prisma.SongAvgOrderByAggregateInput;
    _max?: Prisma.SongMaxOrderByAggregateInput;
    _min?: Prisma.SongMinOrderByAggregateInput;
    _sum?: Prisma.SongSumOrderByAggregateInput;
};
export type SongScalarWhereWithAggregatesInput = {
    AND?: Prisma.SongScalarWhereWithAggregatesInput | Prisma.SongScalarWhereWithAggregatesInput[];
    OR?: Prisma.SongScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SongScalarWhereWithAggregatesInput | Prisma.SongScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Song"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Song"> | string;
    artist?: Prisma.StringWithAggregatesFilter<"Song"> | string;
    album?: Prisma.StringNullableWithAggregatesFilter<"Song"> | string | null;
    genre?: Prisma.StringWithAggregatesFilter<"Song"> | string;
    duration?: Prisma.IntWithAggregatesFilter<"Song"> | number;
    releaseYear?: Prisma.IntNullableWithAggregatesFilter<"Song"> | number | null;
    fileUrl?: Prisma.StringWithAggregatesFilter<"Song"> | string;
    coverUrl?: Prisma.StringNullableWithAggregatesFilter<"Song"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Song"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Song"> | Date | string;
};
export type SongCreateInput = {
    id?: string;
    title: string;
    artist: string;
    album?: string | null;
    genre: string;
    duration: number;
    releaseYear?: number | null;
    fileUrl: string;
    coverUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    playlistSongs?: Prisma.PlaylistSongCreateNestedManyWithoutSongInput;
    favoritedBy?: Prisma.FavoriteSongCreateNestedManyWithoutSongInput;
};
export type SongUncheckedCreateInput = {
    id?: string;
    title: string;
    artist: string;
    album?: string | null;
    genre: string;
    duration: number;
    releaseYear?: number | null;
    fileUrl: string;
    coverUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    playlistSongs?: Prisma.PlaylistSongUncheckedCreateNestedManyWithoutSongInput;
    favoritedBy?: Prisma.FavoriteSongUncheckedCreateNestedManyWithoutSongInput;
};
export type SongUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    artist?: Prisma.StringFieldUpdateOperationsInput | string;
    album?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    genre?: Prisma.StringFieldUpdateOperationsInput | string;
    duration?: Prisma.IntFieldUpdateOperationsInput | number;
    releaseYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    coverUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    playlistSongs?: Prisma.PlaylistSongUpdateManyWithoutSongNestedInput;
    favoritedBy?: Prisma.FavoriteSongUpdateManyWithoutSongNestedInput;
};
export type SongUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    artist?: Prisma.StringFieldUpdateOperationsInput | string;
    album?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    genre?: Prisma.StringFieldUpdateOperationsInput | string;
    duration?: Prisma.IntFieldUpdateOperationsInput | number;
    releaseYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    coverUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    playlistSongs?: Prisma.PlaylistSongUncheckedUpdateManyWithoutSongNestedInput;
    favoritedBy?: Prisma.FavoriteSongUncheckedUpdateManyWithoutSongNestedInput;
};
export type SongCreateManyInput = {
    id?: string;
    title: string;
    artist: string;
    album?: string | null;
    genre: string;
    duration: number;
    releaseYear?: number | null;
    fileUrl: string;
    coverUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SongUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    artist?: Prisma.StringFieldUpdateOperationsInput | string;
    album?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    genre?: Prisma.StringFieldUpdateOperationsInput | string;
    duration?: Prisma.IntFieldUpdateOperationsInput | number;
    releaseYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    coverUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SongUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    artist?: Prisma.StringFieldUpdateOperationsInput | string;
    album?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    genre?: Prisma.StringFieldUpdateOperationsInput | string;
    duration?: Prisma.IntFieldUpdateOperationsInput | number;
    releaseYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    coverUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SongCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    artist?: Prisma.SortOrder;
    album?: Prisma.SortOrder;
    genre?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    releaseYear?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    coverUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SongAvgOrderByAggregateInput = {
    duration?: Prisma.SortOrder;
    releaseYear?: Prisma.SortOrder;
};
export type SongMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    artist?: Prisma.SortOrder;
    album?: Prisma.SortOrder;
    genre?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    releaseYear?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    coverUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SongMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    artist?: Prisma.SortOrder;
    album?: Prisma.SortOrder;
    genre?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    releaseYear?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    coverUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SongSumOrderByAggregateInput = {
    duration?: Prisma.SortOrder;
    releaseYear?: Prisma.SortOrder;
};
export type SongScalarRelationFilter = {
    is?: Prisma.SongWhereInput;
    isNot?: Prisma.SongWhereInput;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type SongCreateNestedOneWithoutPlaylistSongsInput = {
    create?: Prisma.XOR<Prisma.SongCreateWithoutPlaylistSongsInput, Prisma.SongUncheckedCreateWithoutPlaylistSongsInput>;
    connectOrCreate?: Prisma.SongCreateOrConnectWithoutPlaylistSongsInput;
    connect?: Prisma.SongWhereUniqueInput;
};
export type SongUpdateOneRequiredWithoutPlaylistSongsNestedInput = {
    create?: Prisma.XOR<Prisma.SongCreateWithoutPlaylistSongsInput, Prisma.SongUncheckedCreateWithoutPlaylistSongsInput>;
    connectOrCreate?: Prisma.SongCreateOrConnectWithoutPlaylistSongsInput;
    upsert?: Prisma.SongUpsertWithoutPlaylistSongsInput;
    connect?: Prisma.SongWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SongUpdateToOneWithWhereWithoutPlaylistSongsInput, Prisma.SongUpdateWithoutPlaylistSongsInput>, Prisma.SongUncheckedUpdateWithoutPlaylistSongsInput>;
};
export type SongCreateNestedOneWithoutFavoritedByInput = {
    create?: Prisma.XOR<Prisma.SongCreateWithoutFavoritedByInput, Prisma.SongUncheckedCreateWithoutFavoritedByInput>;
    connectOrCreate?: Prisma.SongCreateOrConnectWithoutFavoritedByInput;
    connect?: Prisma.SongWhereUniqueInput;
};
export type SongUpdateOneRequiredWithoutFavoritedByNestedInput = {
    create?: Prisma.XOR<Prisma.SongCreateWithoutFavoritedByInput, Prisma.SongUncheckedCreateWithoutFavoritedByInput>;
    connectOrCreate?: Prisma.SongCreateOrConnectWithoutFavoritedByInput;
    upsert?: Prisma.SongUpsertWithoutFavoritedByInput;
    connect?: Prisma.SongWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SongUpdateToOneWithWhereWithoutFavoritedByInput, Prisma.SongUpdateWithoutFavoritedByInput>, Prisma.SongUncheckedUpdateWithoutFavoritedByInput>;
};
export type SongCreateWithoutPlaylistSongsInput = {
    id?: string;
    title: string;
    artist: string;
    album?: string | null;
    genre: string;
    duration: number;
    releaseYear?: number | null;
    fileUrl: string;
    coverUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favoritedBy?: Prisma.FavoriteSongCreateNestedManyWithoutSongInput;
};
export type SongUncheckedCreateWithoutPlaylistSongsInput = {
    id?: string;
    title: string;
    artist: string;
    album?: string | null;
    genre: string;
    duration: number;
    releaseYear?: number | null;
    fileUrl: string;
    coverUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    favoritedBy?: Prisma.FavoriteSongUncheckedCreateNestedManyWithoutSongInput;
};
export type SongCreateOrConnectWithoutPlaylistSongsInput = {
    where: Prisma.SongWhereUniqueInput;
    create: Prisma.XOR<Prisma.SongCreateWithoutPlaylistSongsInput, Prisma.SongUncheckedCreateWithoutPlaylistSongsInput>;
};
export type SongUpsertWithoutPlaylistSongsInput = {
    update: Prisma.XOR<Prisma.SongUpdateWithoutPlaylistSongsInput, Prisma.SongUncheckedUpdateWithoutPlaylistSongsInput>;
    create: Prisma.XOR<Prisma.SongCreateWithoutPlaylistSongsInput, Prisma.SongUncheckedCreateWithoutPlaylistSongsInput>;
    where?: Prisma.SongWhereInput;
};
export type SongUpdateToOneWithWhereWithoutPlaylistSongsInput = {
    where?: Prisma.SongWhereInput;
    data: Prisma.XOR<Prisma.SongUpdateWithoutPlaylistSongsInput, Prisma.SongUncheckedUpdateWithoutPlaylistSongsInput>;
};
export type SongUpdateWithoutPlaylistSongsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    artist?: Prisma.StringFieldUpdateOperationsInput | string;
    album?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    genre?: Prisma.StringFieldUpdateOperationsInput | string;
    duration?: Prisma.IntFieldUpdateOperationsInput | number;
    releaseYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    coverUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favoritedBy?: Prisma.FavoriteSongUpdateManyWithoutSongNestedInput;
};
export type SongUncheckedUpdateWithoutPlaylistSongsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    artist?: Prisma.StringFieldUpdateOperationsInput | string;
    album?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    genre?: Prisma.StringFieldUpdateOperationsInput | string;
    duration?: Prisma.IntFieldUpdateOperationsInput | number;
    releaseYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    coverUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favoritedBy?: Prisma.FavoriteSongUncheckedUpdateManyWithoutSongNestedInput;
};
export type SongCreateWithoutFavoritedByInput = {
    id?: string;
    title: string;
    artist: string;
    album?: string | null;
    genre: string;
    duration: number;
    releaseYear?: number | null;
    fileUrl: string;
    coverUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    playlistSongs?: Prisma.PlaylistSongCreateNestedManyWithoutSongInput;
};
export type SongUncheckedCreateWithoutFavoritedByInput = {
    id?: string;
    title: string;
    artist: string;
    album?: string | null;
    genre: string;
    duration: number;
    releaseYear?: number | null;
    fileUrl: string;
    coverUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    playlistSongs?: Prisma.PlaylistSongUncheckedCreateNestedManyWithoutSongInput;
};
export type SongCreateOrConnectWithoutFavoritedByInput = {
    where: Prisma.SongWhereUniqueInput;
    create: Prisma.XOR<Prisma.SongCreateWithoutFavoritedByInput, Prisma.SongUncheckedCreateWithoutFavoritedByInput>;
};
export type SongUpsertWithoutFavoritedByInput = {
    update: Prisma.XOR<Prisma.SongUpdateWithoutFavoritedByInput, Prisma.SongUncheckedUpdateWithoutFavoritedByInput>;
    create: Prisma.XOR<Prisma.SongCreateWithoutFavoritedByInput, Prisma.SongUncheckedCreateWithoutFavoritedByInput>;
    where?: Prisma.SongWhereInput;
};
export type SongUpdateToOneWithWhereWithoutFavoritedByInput = {
    where?: Prisma.SongWhereInput;
    data: Prisma.XOR<Prisma.SongUpdateWithoutFavoritedByInput, Prisma.SongUncheckedUpdateWithoutFavoritedByInput>;
};
export type SongUpdateWithoutFavoritedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    artist?: Prisma.StringFieldUpdateOperationsInput | string;
    album?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    genre?: Prisma.StringFieldUpdateOperationsInput | string;
    duration?: Prisma.IntFieldUpdateOperationsInput | number;
    releaseYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    coverUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    playlistSongs?: Prisma.PlaylistSongUpdateManyWithoutSongNestedInput;
};
export type SongUncheckedUpdateWithoutFavoritedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    artist?: Prisma.StringFieldUpdateOperationsInput | string;
    album?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    genre?: Prisma.StringFieldUpdateOperationsInput | string;
    duration?: Prisma.IntFieldUpdateOperationsInput | number;
    releaseYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fileUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    coverUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    playlistSongs?: Prisma.PlaylistSongUncheckedUpdateManyWithoutSongNestedInput;
};
export type SongCountOutputType = {
    playlistSongs: number;
    favoritedBy: number;
};
export type SongCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    playlistSongs?: boolean | SongCountOutputTypeCountPlaylistSongsArgs;
    favoritedBy?: boolean | SongCountOutputTypeCountFavoritedByArgs;
};
export type SongCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SongCountOutputTypeSelect<ExtArgs> | null;
};
export type SongCountOutputTypeCountPlaylistSongsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlaylistSongWhereInput;
};
export type SongCountOutputTypeCountFavoritedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FavoriteSongWhereInput;
};
export type SongSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    artist?: boolean;
    album?: boolean;
    genre?: boolean;
    duration?: boolean;
    releaseYear?: boolean;
    fileUrl?: boolean;
    coverUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    playlistSongs?: boolean | Prisma.Song$playlistSongsArgs<ExtArgs>;
    favoritedBy?: boolean | Prisma.Song$favoritedByArgs<ExtArgs>;
    _count?: boolean | Prisma.SongCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["song"]>;
export type SongSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    artist?: boolean;
    album?: boolean;
    genre?: boolean;
    duration?: boolean;
    releaseYear?: boolean;
    fileUrl?: boolean;
    coverUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["song"]>;
export type SongSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    artist?: boolean;
    album?: boolean;
    genre?: boolean;
    duration?: boolean;
    releaseYear?: boolean;
    fileUrl?: boolean;
    coverUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["song"]>;
export type SongSelectScalar = {
    id?: boolean;
    title?: boolean;
    artist?: boolean;
    album?: boolean;
    genre?: boolean;
    duration?: boolean;
    releaseYear?: boolean;
    fileUrl?: boolean;
    coverUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SongOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "artist" | "album" | "genre" | "duration" | "releaseYear" | "fileUrl" | "coverUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["song"]>;
export type SongInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    playlistSongs?: boolean | Prisma.Song$playlistSongsArgs<ExtArgs>;
    favoritedBy?: boolean | Prisma.Song$favoritedByArgs<ExtArgs>;
    _count?: boolean | Prisma.SongCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SongIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type SongIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $SongPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Song";
    objects: {
        playlistSongs: Prisma.$PlaylistSongPayload<ExtArgs>[];
        favoritedBy: Prisma.$FavoriteSongPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        artist: string;
        album: string | null;
        genre: string;
        duration: number;
        releaseYear: number | null;
        fileUrl: string;
        coverUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["song"]>;
    composites: {};
};
export type SongGetPayload<S extends boolean | null | undefined | SongDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SongPayload, S>;
export type SongCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SongFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SongCountAggregateInputType | true;
};
export interface SongDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Song'];
        meta: {
            name: 'Song';
        };
    };
    findUnique<T extends SongFindUniqueArgs>(args: Prisma.SelectSubset<T, SongFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SongClient<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SongFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SongFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SongClient<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SongFindFirstArgs>(args?: Prisma.SelectSubset<T, SongFindFirstArgs<ExtArgs>>): Prisma.Prisma__SongClient<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SongFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SongFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SongClient<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SongFindManyArgs>(args?: Prisma.SelectSubset<T, SongFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SongCreateArgs>(args: Prisma.SelectSubset<T, SongCreateArgs<ExtArgs>>): Prisma.Prisma__SongClient<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SongCreateManyArgs>(args?: Prisma.SelectSubset<T, SongCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SongCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SongCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SongDeleteArgs>(args: Prisma.SelectSubset<T, SongDeleteArgs<ExtArgs>>): Prisma.Prisma__SongClient<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SongUpdateArgs>(args: Prisma.SelectSubset<T, SongUpdateArgs<ExtArgs>>): Prisma.Prisma__SongClient<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SongDeleteManyArgs>(args?: Prisma.SelectSubset<T, SongDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SongUpdateManyArgs>(args: Prisma.SelectSubset<T, SongUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SongUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SongUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SongUpsertArgs>(args: Prisma.SelectSubset<T, SongUpsertArgs<ExtArgs>>): Prisma.Prisma__SongClient<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SongCountArgs>(args?: Prisma.Subset<T, SongCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SongCountAggregateOutputType> : number>;
    aggregate<T extends SongAggregateArgs>(args: Prisma.Subset<T, SongAggregateArgs>): Prisma.PrismaPromise<GetSongAggregateType<T>>;
    groupBy<T extends SongGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SongGroupByArgs['orderBy'];
    } : {
        orderBy?: SongGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SongFieldRefs;
}
export interface Prisma__SongClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    playlistSongs<T extends Prisma.Song$playlistSongsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Song$playlistSongsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    favoritedBy<T extends Prisma.Song$favoritedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Song$favoritedByArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FavoriteSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SongFieldRefs {
    readonly id: Prisma.FieldRef<"Song", 'String'>;
    readonly title: Prisma.FieldRef<"Song", 'String'>;
    readonly artist: Prisma.FieldRef<"Song", 'String'>;
    readonly album: Prisma.FieldRef<"Song", 'String'>;
    readonly genre: Prisma.FieldRef<"Song", 'String'>;
    readonly duration: Prisma.FieldRef<"Song", 'Int'>;
    readonly releaseYear: Prisma.FieldRef<"Song", 'Int'>;
    readonly fileUrl: Prisma.FieldRef<"Song", 'String'>;
    readonly coverUrl: Prisma.FieldRef<"Song", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Song", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Song", 'DateTime'>;
}
export type SongFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SongSelect<ExtArgs> | null;
    omit?: Prisma.SongOmit<ExtArgs> | null;
    include?: Prisma.SongInclude<ExtArgs> | null;
    where: Prisma.SongWhereUniqueInput;
};
export type SongFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SongSelect<ExtArgs> | null;
    omit?: Prisma.SongOmit<ExtArgs> | null;
    include?: Prisma.SongInclude<ExtArgs> | null;
    where: Prisma.SongWhereUniqueInput;
};
export type SongFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SongSelect<ExtArgs> | null;
    omit?: Prisma.SongOmit<ExtArgs> | null;
    include?: Prisma.SongInclude<ExtArgs> | null;
    where?: Prisma.SongWhereInput;
    orderBy?: Prisma.SongOrderByWithRelationInput | Prisma.SongOrderByWithRelationInput[];
    cursor?: Prisma.SongWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SongScalarFieldEnum | Prisma.SongScalarFieldEnum[];
};
export type SongFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SongSelect<ExtArgs> | null;
    omit?: Prisma.SongOmit<ExtArgs> | null;
    include?: Prisma.SongInclude<ExtArgs> | null;
    where?: Prisma.SongWhereInput;
    orderBy?: Prisma.SongOrderByWithRelationInput | Prisma.SongOrderByWithRelationInput[];
    cursor?: Prisma.SongWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SongScalarFieldEnum | Prisma.SongScalarFieldEnum[];
};
export type SongFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SongSelect<ExtArgs> | null;
    omit?: Prisma.SongOmit<ExtArgs> | null;
    include?: Prisma.SongInclude<ExtArgs> | null;
    where?: Prisma.SongWhereInput;
    orderBy?: Prisma.SongOrderByWithRelationInput | Prisma.SongOrderByWithRelationInput[];
    cursor?: Prisma.SongWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SongScalarFieldEnum | Prisma.SongScalarFieldEnum[];
};
export type SongCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SongSelect<ExtArgs> | null;
    omit?: Prisma.SongOmit<ExtArgs> | null;
    include?: Prisma.SongInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SongCreateInput, Prisma.SongUncheckedCreateInput>;
};
export type SongCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SongCreateManyInput | Prisma.SongCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SongCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SongSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SongOmit<ExtArgs> | null;
    data: Prisma.SongCreateManyInput | Prisma.SongCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SongUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SongSelect<ExtArgs> | null;
    omit?: Prisma.SongOmit<ExtArgs> | null;
    include?: Prisma.SongInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SongUpdateInput, Prisma.SongUncheckedUpdateInput>;
    where: Prisma.SongWhereUniqueInput;
};
export type SongUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SongUpdateManyMutationInput, Prisma.SongUncheckedUpdateManyInput>;
    where?: Prisma.SongWhereInput;
    limit?: number;
};
export type SongUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SongSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SongOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SongUpdateManyMutationInput, Prisma.SongUncheckedUpdateManyInput>;
    where?: Prisma.SongWhereInput;
    limit?: number;
};
export type SongUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SongSelect<ExtArgs> | null;
    omit?: Prisma.SongOmit<ExtArgs> | null;
    include?: Prisma.SongInclude<ExtArgs> | null;
    where: Prisma.SongWhereUniqueInput;
    create: Prisma.XOR<Prisma.SongCreateInput, Prisma.SongUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SongUpdateInput, Prisma.SongUncheckedUpdateInput>;
};
export type SongDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SongSelect<ExtArgs> | null;
    omit?: Prisma.SongOmit<ExtArgs> | null;
    include?: Prisma.SongInclude<ExtArgs> | null;
    where: Prisma.SongWhereUniqueInput;
};
export type SongDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SongWhereInput;
    limit?: number;
};
export type Song$playlistSongsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlaylistSongSelect<ExtArgs> | null;
    omit?: Prisma.PlaylistSongOmit<ExtArgs> | null;
    include?: Prisma.PlaylistSongInclude<ExtArgs> | null;
    where?: Prisma.PlaylistSongWhereInput;
    orderBy?: Prisma.PlaylistSongOrderByWithRelationInput | Prisma.PlaylistSongOrderByWithRelationInput[];
    cursor?: Prisma.PlaylistSongWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlaylistSongScalarFieldEnum | Prisma.PlaylistSongScalarFieldEnum[];
};
export type Song$favoritedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FavoriteSongSelect<ExtArgs> | null;
    omit?: Prisma.FavoriteSongOmit<ExtArgs> | null;
    include?: Prisma.FavoriteSongInclude<ExtArgs> | null;
    where?: Prisma.FavoriteSongWhereInput;
    orderBy?: Prisma.FavoriteSongOrderByWithRelationInput | Prisma.FavoriteSongOrderByWithRelationInput[];
    cursor?: Prisma.FavoriteSongWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FavoriteSongScalarFieldEnum | Prisma.FavoriteSongScalarFieldEnum[];
};
export type SongDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SongSelect<ExtArgs> | null;
    omit?: Prisma.SongOmit<ExtArgs> | null;
    include?: Prisma.SongInclude<ExtArgs> | null;
};
export {};
