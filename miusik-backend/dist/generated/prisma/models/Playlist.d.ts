import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PlaylistModel = runtime.Types.Result.DefaultSelection<Prisma.$PlaylistPayload>;
export type AggregatePlaylist = {
    _count: PlaylistCountAggregateOutputType | null;
    _min: PlaylistMinAggregateOutputType | null;
    _max: PlaylistMaxAggregateOutputType | null;
};
export type PlaylistMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    coverUrl: string | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PlaylistMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    coverUrl: string | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PlaylistCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    coverUrl: number;
    userId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PlaylistMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    coverUrl?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PlaylistMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    coverUrl?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PlaylistCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    coverUrl?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PlaylistAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlaylistWhereInput;
    orderBy?: Prisma.PlaylistOrderByWithRelationInput | Prisma.PlaylistOrderByWithRelationInput[];
    cursor?: Prisma.PlaylistWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PlaylistCountAggregateInputType;
    _min?: PlaylistMinAggregateInputType;
    _max?: PlaylistMaxAggregateInputType;
};
export type GetPlaylistAggregateType<T extends PlaylistAggregateArgs> = {
    [P in keyof T & keyof AggregatePlaylist]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePlaylist[P]> : Prisma.GetScalarType<T[P], AggregatePlaylist[P]>;
};
export type PlaylistGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlaylistWhereInput;
    orderBy?: Prisma.PlaylistOrderByWithAggregationInput | Prisma.PlaylistOrderByWithAggregationInput[];
    by: Prisma.PlaylistScalarFieldEnum[] | Prisma.PlaylistScalarFieldEnum;
    having?: Prisma.PlaylistScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PlaylistCountAggregateInputType | true;
    _min?: PlaylistMinAggregateInputType;
    _max?: PlaylistMaxAggregateInputType;
};
export type PlaylistGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    coverUrl: string | null;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: PlaylistCountAggregateOutputType | null;
    _min: PlaylistMinAggregateOutputType | null;
    _max: PlaylistMaxAggregateOutputType | null;
};
type GetPlaylistGroupByPayload<T extends PlaylistGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PlaylistGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PlaylistGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PlaylistGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PlaylistGroupByOutputType[P]>;
}>>;
export type PlaylistWhereInput = {
    AND?: Prisma.PlaylistWhereInput | Prisma.PlaylistWhereInput[];
    OR?: Prisma.PlaylistWhereInput[];
    NOT?: Prisma.PlaylistWhereInput | Prisma.PlaylistWhereInput[];
    id?: Prisma.StringFilter<"Playlist"> | string;
    name?: Prisma.StringFilter<"Playlist"> | string;
    description?: Prisma.StringNullableFilter<"Playlist"> | string | null;
    coverUrl?: Prisma.StringNullableFilter<"Playlist"> | string | null;
    userId?: Prisma.StringFilter<"Playlist"> | string;
    createdAt?: Prisma.DateTimeFilter<"Playlist"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Playlist"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    playlistSongs?: Prisma.PlaylistSongListRelationFilter;
};
export type PlaylistOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    coverUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    playlistSongs?: Prisma.PlaylistSongOrderByRelationAggregateInput;
};
export type PlaylistWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PlaylistWhereInput | Prisma.PlaylistWhereInput[];
    OR?: Prisma.PlaylistWhereInput[];
    NOT?: Prisma.PlaylistWhereInput | Prisma.PlaylistWhereInput[];
    name?: Prisma.StringFilter<"Playlist"> | string;
    description?: Prisma.StringNullableFilter<"Playlist"> | string | null;
    coverUrl?: Prisma.StringNullableFilter<"Playlist"> | string | null;
    userId?: Prisma.StringFilter<"Playlist"> | string;
    createdAt?: Prisma.DateTimeFilter<"Playlist"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Playlist"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    playlistSongs?: Prisma.PlaylistSongListRelationFilter;
}, "id">;
export type PlaylistOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    coverUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PlaylistCountOrderByAggregateInput;
    _max?: Prisma.PlaylistMaxOrderByAggregateInput;
    _min?: Prisma.PlaylistMinOrderByAggregateInput;
};
export type PlaylistScalarWhereWithAggregatesInput = {
    AND?: Prisma.PlaylistScalarWhereWithAggregatesInput | Prisma.PlaylistScalarWhereWithAggregatesInput[];
    OR?: Prisma.PlaylistScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PlaylistScalarWhereWithAggregatesInput | Prisma.PlaylistScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Playlist"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Playlist"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Playlist"> | string | null;
    coverUrl?: Prisma.StringNullableWithAggregatesFilter<"Playlist"> | string | null;
    userId?: Prisma.StringWithAggregatesFilter<"Playlist"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Playlist"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Playlist"> | Date | string;
};
export type PlaylistCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    coverUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPlaylistsInput;
    playlistSongs?: Prisma.PlaylistSongCreateNestedManyWithoutPlaylistInput;
};
export type PlaylistUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    coverUrl?: string | null;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    playlistSongs?: Prisma.PlaylistSongUncheckedCreateNestedManyWithoutPlaylistInput;
};
export type PlaylistUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPlaylistsNestedInput;
    playlistSongs?: Prisma.PlaylistSongUpdateManyWithoutPlaylistNestedInput;
};
export type PlaylistUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    playlistSongs?: Prisma.PlaylistSongUncheckedUpdateManyWithoutPlaylistNestedInput;
};
export type PlaylistCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    coverUrl?: string | null;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PlaylistUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlaylistUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlaylistListRelationFilter = {
    every?: Prisma.PlaylistWhereInput;
    some?: Prisma.PlaylistWhereInput;
    none?: Prisma.PlaylistWhereInput;
};
export type PlaylistOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PlaylistCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    coverUrl?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PlaylistMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    coverUrl?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PlaylistMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    coverUrl?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PlaylistScalarRelationFilter = {
    is?: Prisma.PlaylistWhereInput;
    isNot?: Prisma.PlaylistWhereInput;
};
export type PlaylistCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PlaylistCreateWithoutUserInput, Prisma.PlaylistUncheckedCreateWithoutUserInput> | Prisma.PlaylistCreateWithoutUserInput[] | Prisma.PlaylistUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PlaylistCreateOrConnectWithoutUserInput | Prisma.PlaylistCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PlaylistCreateManyUserInputEnvelope;
    connect?: Prisma.PlaylistWhereUniqueInput | Prisma.PlaylistWhereUniqueInput[];
};
export type PlaylistUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PlaylistCreateWithoutUserInput, Prisma.PlaylistUncheckedCreateWithoutUserInput> | Prisma.PlaylistCreateWithoutUserInput[] | Prisma.PlaylistUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PlaylistCreateOrConnectWithoutUserInput | Prisma.PlaylistCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PlaylistCreateManyUserInputEnvelope;
    connect?: Prisma.PlaylistWhereUniqueInput | Prisma.PlaylistWhereUniqueInput[];
};
export type PlaylistUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PlaylistCreateWithoutUserInput, Prisma.PlaylistUncheckedCreateWithoutUserInput> | Prisma.PlaylistCreateWithoutUserInput[] | Prisma.PlaylistUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PlaylistCreateOrConnectWithoutUserInput | Prisma.PlaylistCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PlaylistUpsertWithWhereUniqueWithoutUserInput | Prisma.PlaylistUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PlaylistCreateManyUserInputEnvelope;
    set?: Prisma.PlaylistWhereUniqueInput | Prisma.PlaylistWhereUniqueInput[];
    disconnect?: Prisma.PlaylistWhereUniqueInput | Prisma.PlaylistWhereUniqueInput[];
    delete?: Prisma.PlaylistWhereUniqueInput | Prisma.PlaylistWhereUniqueInput[];
    connect?: Prisma.PlaylistWhereUniqueInput | Prisma.PlaylistWhereUniqueInput[];
    update?: Prisma.PlaylistUpdateWithWhereUniqueWithoutUserInput | Prisma.PlaylistUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PlaylistUpdateManyWithWhereWithoutUserInput | Prisma.PlaylistUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PlaylistScalarWhereInput | Prisma.PlaylistScalarWhereInput[];
};
export type PlaylistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PlaylistCreateWithoutUserInput, Prisma.PlaylistUncheckedCreateWithoutUserInput> | Prisma.PlaylistCreateWithoutUserInput[] | Prisma.PlaylistUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PlaylistCreateOrConnectWithoutUserInput | Prisma.PlaylistCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PlaylistUpsertWithWhereUniqueWithoutUserInput | Prisma.PlaylistUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PlaylistCreateManyUserInputEnvelope;
    set?: Prisma.PlaylistWhereUniqueInput | Prisma.PlaylistWhereUniqueInput[];
    disconnect?: Prisma.PlaylistWhereUniqueInput | Prisma.PlaylistWhereUniqueInput[];
    delete?: Prisma.PlaylistWhereUniqueInput | Prisma.PlaylistWhereUniqueInput[];
    connect?: Prisma.PlaylistWhereUniqueInput | Prisma.PlaylistWhereUniqueInput[];
    update?: Prisma.PlaylistUpdateWithWhereUniqueWithoutUserInput | Prisma.PlaylistUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PlaylistUpdateManyWithWhereWithoutUserInput | Prisma.PlaylistUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PlaylistScalarWhereInput | Prisma.PlaylistScalarWhereInput[];
};
export type PlaylistCreateNestedOneWithoutPlaylistSongsInput = {
    create?: Prisma.XOR<Prisma.PlaylistCreateWithoutPlaylistSongsInput, Prisma.PlaylistUncheckedCreateWithoutPlaylistSongsInput>;
    connectOrCreate?: Prisma.PlaylistCreateOrConnectWithoutPlaylistSongsInput;
    connect?: Prisma.PlaylistWhereUniqueInput;
};
export type PlaylistUpdateOneRequiredWithoutPlaylistSongsNestedInput = {
    create?: Prisma.XOR<Prisma.PlaylistCreateWithoutPlaylistSongsInput, Prisma.PlaylistUncheckedCreateWithoutPlaylistSongsInput>;
    connectOrCreate?: Prisma.PlaylistCreateOrConnectWithoutPlaylistSongsInput;
    upsert?: Prisma.PlaylistUpsertWithoutPlaylistSongsInput;
    connect?: Prisma.PlaylistWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PlaylistUpdateToOneWithWhereWithoutPlaylistSongsInput, Prisma.PlaylistUpdateWithoutPlaylistSongsInput>, Prisma.PlaylistUncheckedUpdateWithoutPlaylistSongsInput>;
};
export type PlaylistCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    coverUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    playlistSongs?: Prisma.PlaylistSongCreateNestedManyWithoutPlaylistInput;
};
export type PlaylistUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    coverUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    playlistSongs?: Prisma.PlaylistSongUncheckedCreateNestedManyWithoutPlaylistInput;
};
export type PlaylistCreateOrConnectWithoutUserInput = {
    where: Prisma.PlaylistWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlaylistCreateWithoutUserInput, Prisma.PlaylistUncheckedCreateWithoutUserInput>;
};
export type PlaylistCreateManyUserInputEnvelope = {
    data: Prisma.PlaylistCreateManyUserInput | Prisma.PlaylistCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type PlaylistUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.PlaylistWhereUniqueInput;
    update: Prisma.XOR<Prisma.PlaylistUpdateWithoutUserInput, Prisma.PlaylistUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.PlaylistCreateWithoutUserInput, Prisma.PlaylistUncheckedCreateWithoutUserInput>;
};
export type PlaylistUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.PlaylistWhereUniqueInput;
    data: Prisma.XOR<Prisma.PlaylistUpdateWithoutUserInput, Prisma.PlaylistUncheckedUpdateWithoutUserInput>;
};
export type PlaylistUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.PlaylistScalarWhereInput;
    data: Prisma.XOR<Prisma.PlaylistUpdateManyMutationInput, Prisma.PlaylistUncheckedUpdateManyWithoutUserInput>;
};
export type PlaylistScalarWhereInput = {
    AND?: Prisma.PlaylistScalarWhereInput | Prisma.PlaylistScalarWhereInput[];
    OR?: Prisma.PlaylistScalarWhereInput[];
    NOT?: Prisma.PlaylistScalarWhereInput | Prisma.PlaylistScalarWhereInput[];
    id?: Prisma.StringFilter<"Playlist"> | string;
    name?: Prisma.StringFilter<"Playlist"> | string;
    description?: Prisma.StringNullableFilter<"Playlist"> | string | null;
    coverUrl?: Prisma.StringNullableFilter<"Playlist"> | string | null;
    userId?: Prisma.StringFilter<"Playlist"> | string;
    createdAt?: Prisma.DateTimeFilter<"Playlist"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Playlist"> | Date | string;
};
export type PlaylistCreateWithoutPlaylistSongsInput = {
    id?: string;
    name: string;
    description?: string | null;
    coverUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPlaylistsInput;
};
export type PlaylistUncheckedCreateWithoutPlaylistSongsInput = {
    id?: string;
    name: string;
    description?: string | null;
    coverUrl?: string | null;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PlaylistCreateOrConnectWithoutPlaylistSongsInput = {
    where: Prisma.PlaylistWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlaylistCreateWithoutPlaylistSongsInput, Prisma.PlaylistUncheckedCreateWithoutPlaylistSongsInput>;
};
export type PlaylistUpsertWithoutPlaylistSongsInput = {
    update: Prisma.XOR<Prisma.PlaylistUpdateWithoutPlaylistSongsInput, Prisma.PlaylistUncheckedUpdateWithoutPlaylistSongsInput>;
    create: Prisma.XOR<Prisma.PlaylistCreateWithoutPlaylistSongsInput, Prisma.PlaylistUncheckedCreateWithoutPlaylistSongsInput>;
    where?: Prisma.PlaylistWhereInput;
};
export type PlaylistUpdateToOneWithWhereWithoutPlaylistSongsInput = {
    where?: Prisma.PlaylistWhereInput;
    data: Prisma.XOR<Prisma.PlaylistUpdateWithoutPlaylistSongsInput, Prisma.PlaylistUncheckedUpdateWithoutPlaylistSongsInput>;
};
export type PlaylistUpdateWithoutPlaylistSongsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPlaylistsNestedInput;
};
export type PlaylistUncheckedUpdateWithoutPlaylistSongsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlaylistCreateManyUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    coverUrl?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PlaylistUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    playlistSongs?: Prisma.PlaylistSongUpdateManyWithoutPlaylistNestedInput;
};
export type PlaylistUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    playlistSongs?: Prisma.PlaylistSongUncheckedUpdateManyWithoutPlaylistNestedInput;
};
export type PlaylistUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    coverUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlaylistCountOutputType = {
    playlistSongs: number;
};
export type PlaylistCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    playlistSongs?: boolean | PlaylistCountOutputTypeCountPlaylistSongsArgs;
};
export type PlaylistCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlaylistCountOutputTypeSelect<ExtArgs> | null;
};
export type PlaylistCountOutputTypeCountPlaylistSongsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlaylistSongWhereInput;
};
export type PlaylistSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    coverUrl?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    playlistSongs?: boolean | Prisma.Playlist$playlistSongsArgs<ExtArgs>;
    _count?: boolean | Prisma.PlaylistCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["playlist"]>;
export type PlaylistSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    coverUrl?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["playlist"]>;
export type PlaylistSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    coverUrl?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["playlist"]>;
export type PlaylistSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    coverUrl?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PlaylistOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "coverUrl" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["playlist"]>;
export type PlaylistInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    playlistSongs?: boolean | Prisma.Playlist$playlistSongsArgs<ExtArgs>;
    _count?: boolean | Prisma.PlaylistCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PlaylistIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type PlaylistIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $PlaylistPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Playlist";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        playlistSongs: Prisma.$PlaylistSongPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        description: string | null;
        coverUrl: string | null;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["playlist"]>;
    composites: {};
};
export type PlaylistGetPayload<S extends boolean | null | undefined | PlaylistDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PlaylistPayload, S>;
export type PlaylistCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PlaylistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PlaylistCountAggregateInputType | true;
};
export interface PlaylistDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Playlist'];
        meta: {
            name: 'Playlist';
        };
    };
    findUnique<T extends PlaylistFindUniqueArgs>(args: Prisma.SelectSubset<T, PlaylistFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PlaylistClient<runtime.Types.Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PlaylistFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PlaylistFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlaylistClient<runtime.Types.Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PlaylistFindFirstArgs>(args?: Prisma.SelectSubset<T, PlaylistFindFirstArgs<ExtArgs>>): Prisma.Prisma__PlaylistClient<runtime.Types.Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PlaylistFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PlaylistFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlaylistClient<runtime.Types.Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PlaylistFindManyArgs>(args?: Prisma.SelectSubset<T, PlaylistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PlaylistCreateArgs>(args: Prisma.SelectSubset<T, PlaylistCreateArgs<ExtArgs>>): Prisma.Prisma__PlaylistClient<runtime.Types.Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PlaylistCreateManyArgs>(args?: Prisma.SelectSubset<T, PlaylistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PlaylistCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PlaylistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PlaylistDeleteArgs>(args: Prisma.SelectSubset<T, PlaylistDeleteArgs<ExtArgs>>): Prisma.Prisma__PlaylistClient<runtime.Types.Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PlaylistUpdateArgs>(args: Prisma.SelectSubset<T, PlaylistUpdateArgs<ExtArgs>>): Prisma.Prisma__PlaylistClient<runtime.Types.Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PlaylistDeleteManyArgs>(args?: Prisma.SelectSubset<T, PlaylistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PlaylistUpdateManyArgs>(args: Prisma.SelectSubset<T, PlaylistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PlaylistUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PlaylistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PlaylistUpsertArgs>(args: Prisma.SelectSubset<T, PlaylistUpsertArgs<ExtArgs>>): Prisma.Prisma__PlaylistClient<runtime.Types.Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PlaylistCountArgs>(args?: Prisma.Subset<T, PlaylistCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PlaylistCountAggregateOutputType> : number>;
    aggregate<T extends PlaylistAggregateArgs>(args: Prisma.Subset<T, PlaylistAggregateArgs>): Prisma.PrismaPromise<GetPlaylistAggregateType<T>>;
    groupBy<T extends PlaylistGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PlaylistGroupByArgs['orderBy'];
    } : {
        orderBy?: PlaylistGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PlaylistFieldRefs;
}
export interface Prisma__PlaylistClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    playlistSongs<T extends Prisma.Playlist$playlistSongsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Playlist$playlistSongsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PlaylistFieldRefs {
    readonly id: Prisma.FieldRef<"Playlist", 'String'>;
    readonly name: Prisma.FieldRef<"Playlist", 'String'>;
    readonly description: Prisma.FieldRef<"Playlist", 'String'>;
    readonly coverUrl: Prisma.FieldRef<"Playlist", 'String'>;
    readonly userId: Prisma.FieldRef<"Playlist", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Playlist", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Playlist", 'DateTime'>;
}
export type PlaylistFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlaylistSelect<ExtArgs> | null;
    omit?: Prisma.PlaylistOmit<ExtArgs> | null;
    include?: Prisma.PlaylistInclude<ExtArgs> | null;
    where: Prisma.PlaylistWhereUniqueInput;
};
export type PlaylistFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlaylistSelect<ExtArgs> | null;
    omit?: Prisma.PlaylistOmit<ExtArgs> | null;
    include?: Prisma.PlaylistInclude<ExtArgs> | null;
    where: Prisma.PlaylistWhereUniqueInput;
};
export type PlaylistFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlaylistSelect<ExtArgs> | null;
    omit?: Prisma.PlaylistOmit<ExtArgs> | null;
    include?: Prisma.PlaylistInclude<ExtArgs> | null;
    where?: Prisma.PlaylistWhereInput;
    orderBy?: Prisma.PlaylistOrderByWithRelationInput | Prisma.PlaylistOrderByWithRelationInput[];
    cursor?: Prisma.PlaylistWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlaylistScalarFieldEnum | Prisma.PlaylistScalarFieldEnum[];
};
export type PlaylistFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlaylistSelect<ExtArgs> | null;
    omit?: Prisma.PlaylistOmit<ExtArgs> | null;
    include?: Prisma.PlaylistInclude<ExtArgs> | null;
    where?: Prisma.PlaylistWhereInput;
    orderBy?: Prisma.PlaylistOrderByWithRelationInput | Prisma.PlaylistOrderByWithRelationInput[];
    cursor?: Prisma.PlaylistWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlaylistScalarFieldEnum | Prisma.PlaylistScalarFieldEnum[];
};
export type PlaylistFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlaylistSelect<ExtArgs> | null;
    omit?: Prisma.PlaylistOmit<ExtArgs> | null;
    include?: Prisma.PlaylistInclude<ExtArgs> | null;
    where?: Prisma.PlaylistWhereInput;
    orderBy?: Prisma.PlaylistOrderByWithRelationInput | Prisma.PlaylistOrderByWithRelationInput[];
    cursor?: Prisma.PlaylistWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlaylistScalarFieldEnum | Prisma.PlaylistScalarFieldEnum[];
};
export type PlaylistCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlaylistSelect<ExtArgs> | null;
    omit?: Prisma.PlaylistOmit<ExtArgs> | null;
    include?: Prisma.PlaylistInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlaylistCreateInput, Prisma.PlaylistUncheckedCreateInput>;
};
export type PlaylistCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PlaylistCreateManyInput | Prisma.PlaylistCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PlaylistCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlaylistSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PlaylistOmit<ExtArgs> | null;
    data: Prisma.PlaylistCreateManyInput | Prisma.PlaylistCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PlaylistIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PlaylistUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlaylistSelect<ExtArgs> | null;
    omit?: Prisma.PlaylistOmit<ExtArgs> | null;
    include?: Prisma.PlaylistInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlaylistUpdateInput, Prisma.PlaylistUncheckedUpdateInput>;
    where: Prisma.PlaylistWhereUniqueInput;
};
export type PlaylistUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PlaylistUpdateManyMutationInput, Prisma.PlaylistUncheckedUpdateManyInput>;
    where?: Prisma.PlaylistWhereInput;
    limit?: number;
};
export type PlaylistUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlaylistSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PlaylistOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlaylistUpdateManyMutationInput, Prisma.PlaylistUncheckedUpdateManyInput>;
    where?: Prisma.PlaylistWhereInput;
    limit?: number;
    include?: Prisma.PlaylistIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PlaylistUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlaylistSelect<ExtArgs> | null;
    omit?: Prisma.PlaylistOmit<ExtArgs> | null;
    include?: Prisma.PlaylistInclude<ExtArgs> | null;
    where: Prisma.PlaylistWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlaylistCreateInput, Prisma.PlaylistUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PlaylistUpdateInput, Prisma.PlaylistUncheckedUpdateInput>;
};
export type PlaylistDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlaylistSelect<ExtArgs> | null;
    omit?: Prisma.PlaylistOmit<ExtArgs> | null;
    include?: Prisma.PlaylistInclude<ExtArgs> | null;
    where: Prisma.PlaylistWhereUniqueInput;
};
export type PlaylistDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlaylistWhereInput;
    limit?: number;
};
export type Playlist$playlistSongsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PlaylistDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlaylistSelect<ExtArgs> | null;
    omit?: Prisma.PlaylistOmit<ExtArgs> | null;
    include?: Prisma.PlaylistInclude<ExtArgs> | null;
};
export {};
