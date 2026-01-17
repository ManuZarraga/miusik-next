import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PlaylistSongModel = runtime.Types.Result.DefaultSelection<Prisma.$PlaylistSongPayload>;
export type AggregatePlaylistSong = {
    _count: PlaylistSongCountAggregateOutputType | null;
    _avg: PlaylistSongAvgAggregateOutputType | null;
    _sum: PlaylistSongSumAggregateOutputType | null;
    _min: PlaylistSongMinAggregateOutputType | null;
    _max: PlaylistSongMaxAggregateOutputType | null;
};
export type PlaylistSongAvgAggregateOutputType = {
    order: number | null;
};
export type PlaylistSongSumAggregateOutputType = {
    order: number | null;
};
export type PlaylistSongMinAggregateOutputType = {
    id: string | null;
    playlistId: string | null;
    songId: string | null;
    order: number | null;
    addedAt: Date | null;
};
export type PlaylistSongMaxAggregateOutputType = {
    id: string | null;
    playlistId: string | null;
    songId: string | null;
    order: number | null;
    addedAt: Date | null;
};
export type PlaylistSongCountAggregateOutputType = {
    id: number;
    playlistId: number;
    songId: number;
    order: number;
    addedAt: number;
    _all: number;
};
export type PlaylistSongAvgAggregateInputType = {
    order?: true;
};
export type PlaylistSongSumAggregateInputType = {
    order?: true;
};
export type PlaylistSongMinAggregateInputType = {
    id?: true;
    playlistId?: true;
    songId?: true;
    order?: true;
    addedAt?: true;
};
export type PlaylistSongMaxAggregateInputType = {
    id?: true;
    playlistId?: true;
    songId?: true;
    order?: true;
    addedAt?: true;
};
export type PlaylistSongCountAggregateInputType = {
    id?: true;
    playlistId?: true;
    songId?: true;
    order?: true;
    addedAt?: true;
    _all?: true;
};
export type PlaylistSongAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlaylistSongWhereInput;
    orderBy?: Prisma.PlaylistSongOrderByWithRelationInput | Prisma.PlaylistSongOrderByWithRelationInput[];
    cursor?: Prisma.PlaylistSongWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PlaylistSongCountAggregateInputType;
    _avg?: PlaylistSongAvgAggregateInputType;
    _sum?: PlaylistSongSumAggregateInputType;
    _min?: PlaylistSongMinAggregateInputType;
    _max?: PlaylistSongMaxAggregateInputType;
};
export type GetPlaylistSongAggregateType<T extends PlaylistSongAggregateArgs> = {
    [P in keyof T & keyof AggregatePlaylistSong]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePlaylistSong[P]> : Prisma.GetScalarType<T[P], AggregatePlaylistSong[P]>;
};
export type PlaylistSongGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlaylistSongWhereInput;
    orderBy?: Prisma.PlaylistSongOrderByWithAggregationInput | Prisma.PlaylistSongOrderByWithAggregationInput[];
    by: Prisma.PlaylistSongScalarFieldEnum[] | Prisma.PlaylistSongScalarFieldEnum;
    having?: Prisma.PlaylistSongScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PlaylistSongCountAggregateInputType | true;
    _avg?: PlaylistSongAvgAggregateInputType;
    _sum?: PlaylistSongSumAggregateInputType;
    _min?: PlaylistSongMinAggregateInputType;
    _max?: PlaylistSongMaxAggregateInputType;
};
export type PlaylistSongGroupByOutputType = {
    id: string;
    playlistId: string;
    songId: string;
    order: number;
    addedAt: Date;
    _count: PlaylistSongCountAggregateOutputType | null;
    _avg: PlaylistSongAvgAggregateOutputType | null;
    _sum: PlaylistSongSumAggregateOutputType | null;
    _min: PlaylistSongMinAggregateOutputType | null;
    _max: PlaylistSongMaxAggregateOutputType | null;
};
type GetPlaylistSongGroupByPayload<T extends PlaylistSongGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PlaylistSongGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PlaylistSongGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PlaylistSongGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PlaylistSongGroupByOutputType[P]>;
}>>;
export type PlaylistSongWhereInput = {
    AND?: Prisma.PlaylistSongWhereInput | Prisma.PlaylistSongWhereInput[];
    OR?: Prisma.PlaylistSongWhereInput[];
    NOT?: Prisma.PlaylistSongWhereInput | Prisma.PlaylistSongWhereInput[];
    id?: Prisma.StringFilter<"PlaylistSong"> | string;
    playlistId?: Prisma.StringFilter<"PlaylistSong"> | string;
    songId?: Prisma.StringFilter<"PlaylistSong"> | string;
    order?: Prisma.IntFilter<"PlaylistSong"> | number;
    addedAt?: Prisma.DateTimeFilter<"PlaylistSong"> | Date | string;
    playlist?: Prisma.XOR<Prisma.PlaylistScalarRelationFilter, Prisma.PlaylistWhereInput>;
    song?: Prisma.XOR<Prisma.SongScalarRelationFilter, Prisma.SongWhereInput>;
};
export type PlaylistSongOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    playlistId?: Prisma.SortOrder;
    songId?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    addedAt?: Prisma.SortOrder;
    playlist?: Prisma.PlaylistOrderByWithRelationInput;
    song?: Prisma.SongOrderByWithRelationInput;
};
export type PlaylistSongWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    playlistId_songId?: Prisma.PlaylistSongPlaylistIdSongIdCompoundUniqueInput;
    AND?: Prisma.PlaylistSongWhereInput | Prisma.PlaylistSongWhereInput[];
    OR?: Prisma.PlaylistSongWhereInput[];
    NOT?: Prisma.PlaylistSongWhereInput | Prisma.PlaylistSongWhereInput[];
    playlistId?: Prisma.StringFilter<"PlaylistSong"> | string;
    songId?: Prisma.StringFilter<"PlaylistSong"> | string;
    order?: Prisma.IntFilter<"PlaylistSong"> | number;
    addedAt?: Prisma.DateTimeFilter<"PlaylistSong"> | Date | string;
    playlist?: Prisma.XOR<Prisma.PlaylistScalarRelationFilter, Prisma.PlaylistWhereInput>;
    song?: Prisma.XOR<Prisma.SongScalarRelationFilter, Prisma.SongWhereInput>;
}, "id" | "playlistId_songId">;
export type PlaylistSongOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    playlistId?: Prisma.SortOrder;
    songId?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    addedAt?: Prisma.SortOrder;
    _count?: Prisma.PlaylistSongCountOrderByAggregateInput;
    _avg?: Prisma.PlaylistSongAvgOrderByAggregateInput;
    _max?: Prisma.PlaylistSongMaxOrderByAggregateInput;
    _min?: Prisma.PlaylistSongMinOrderByAggregateInput;
    _sum?: Prisma.PlaylistSongSumOrderByAggregateInput;
};
export type PlaylistSongScalarWhereWithAggregatesInput = {
    AND?: Prisma.PlaylistSongScalarWhereWithAggregatesInput | Prisma.PlaylistSongScalarWhereWithAggregatesInput[];
    OR?: Prisma.PlaylistSongScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PlaylistSongScalarWhereWithAggregatesInput | Prisma.PlaylistSongScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PlaylistSong"> | string;
    playlistId?: Prisma.StringWithAggregatesFilter<"PlaylistSong"> | string;
    songId?: Prisma.StringWithAggregatesFilter<"PlaylistSong"> | string;
    order?: Prisma.IntWithAggregatesFilter<"PlaylistSong"> | number;
    addedAt?: Prisma.DateTimeWithAggregatesFilter<"PlaylistSong"> | Date | string;
};
export type PlaylistSongCreateInput = {
    id?: string;
    order?: number;
    addedAt?: Date | string;
    playlist: Prisma.PlaylistCreateNestedOneWithoutPlaylistSongsInput;
    song: Prisma.SongCreateNestedOneWithoutPlaylistSongsInput;
};
export type PlaylistSongUncheckedCreateInput = {
    id?: string;
    playlistId: string;
    songId: string;
    order?: number;
    addedAt?: Date | string;
};
export type PlaylistSongUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    playlist?: Prisma.PlaylistUpdateOneRequiredWithoutPlaylistSongsNestedInput;
    song?: Prisma.SongUpdateOneRequiredWithoutPlaylistSongsNestedInput;
};
export type PlaylistSongUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    playlistId?: Prisma.StringFieldUpdateOperationsInput | string;
    songId?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlaylistSongCreateManyInput = {
    id?: string;
    playlistId: string;
    songId: string;
    order?: number;
    addedAt?: Date | string;
};
export type PlaylistSongUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlaylistSongUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    playlistId?: Prisma.StringFieldUpdateOperationsInput | string;
    songId?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlaylistSongListRelationFilter = {
    every?: Prisma.PlaylistSongWhereInput;
    some?: Prisma.PlaylistSongWhereInput;
    none?: Prisma.PlaylistSongWhereInput;
};
export type PlaylistSongOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PlaylistSongPlaylistIdSongIdCompoundUniqueInput = {
    playlistId: string;
    songId: string;
};
export type PlaylistSongCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    playlistId?: Prisma.SortOrder;
    songId?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    addedAt?: Prisma.SortOrder;
};
export type PlaylistSongAvgOrderByAggregateInput = {
    order?: Prisma.SortOrder;
};
export type PlaylistSongMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    playlistId?: Prisma.SortOrder;
    songId?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    addedAt?: Prisma.SortOrder;
};
export type PlaylistSongMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    playlistId?: Prisma.SortOrder;
    songId?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    addedAt?: Prisma.SortOrder;
};
export type PlaylistSongSumOrderByAggregateInput = {
    order?: Prisma.SortOrder;
};
export type PlaylistSongCreateNestedManyWithoutSongInput = {
    create?: Prisma.XOR<Prisma.PlaylistSongCreateWithoutSongInput, Prisma.PlaylistSongUncheckedCreateWithoutSongInput> | Prisma.PlaylistSongCreateWithoutSongInput[] | Prisma.PlaylistSongUncheckedCreateWithoutSongInput[];
    connectOrCreate?: Prisma.PlaylistSongCreateOrConnectWithoutSongInput | Prisma.PlaylistSongCreateOrConnectWithoutSongInput[];
    createMany?: Prisma.PlaylistSongCreateManySongInputEnvelope;
    connect?: Prisma.PlaylistSongWhereUniqueInput | Prisma.PlaylistSongWhereUniqueInput[];
};
export type PlaylistSongUncheckedCreateNestedManyWithoutSongInput = {
    create?: Prisma.XOR<Prisma.PlaylistSongCreateWithoutSongInput, Prisma.PlaylistSongUncheckedCreateWithoutSongInput> | Prisma.PlaylistSongCreateWithoutSongInput[] | Prisma.PlaylistSongUncheckedCreateWithoutSongInput[];
    connectOrCreate?: Prisma.PlaylistSongCreateOrConnectWithoutSongInput | Prisma.PlaylistSongCreateOrConnectWithoutSongInput[];
    createMany?: Prisma.PlaylistSongCreateManySongInputEnvelope;
    connect?: Prisma.PlaylistSongWhereUniqueInput | Prisma.PlaylistSongWhereUniqueInput[];
};
export type PlaylistSongUpdateManyWithoutSongNestedInput = {
    create?: Prisma.XOR<Prisma.PlaylistSongCreateWithoutSongInput, Prisma.PlaylistSongUncheckedCreateWithoutSongInput> | Prisma.PlaylistSongCreateWithoutSongInput[] | Prisma.PlaylistSongUncheckedCreateWithoutSongInput[];
    connectOrCreate?: Prisma.PlaylistSongCreateOrConnectWithoutSongInput | Prisma.PlaylistSongCreateOrConnectWithoutSongInput[];
    upsert?: Prisma.PlaylistSongUpsertWithWhereUniqueWithoutSongInput | Prisma.PlaylistSongUpsertWithWhereUniqueWithoutSongInput[];
    createMany?: Prisma.PlaylistSongCreateManySongInputEnvelope;
    set?: Prisma.PlaylistSongWhereUniqueInput | Prisma.PlaylistSongWhereUniqueInput[];
    disconnect?: Prisma.PlaylistSongWhereUniqueInput | Prisma.PlaylistSongWhereUniqueInput[];
    delete?: Prisma.PlaylistSongWhereUniqueInput | Prisma.PlaylistSongWhereUniqueInput[];
    connect?: Prisma.PlaylistSongWhereUniqueInput | Prisma.PlaylistSongWhereUniqueInput[];
    update?: Prisma.PlaylistSongUpdateWithWhereUniqueWithoutSongInput | Prisma.PlaylistSongUpdateWithWhereUniqueWithoutSongInput[];
    updateMany?: Prisma.PlaylistSongUpdateManyWithWhereWithoutSongInput | Prisma.PlaylistSongUpdateManyWithWhereWithoutSongInput[];
    deleteMany?: Prisma.PlaylistSongScalarWhereInput | Prisma.PlaylistSongScalarWhereInput[];
};
export type PlaylistSongUncheckedUpdateManyWithoutSongNestedInput = {
    create?: Prisma.XOR<Prisma.PlaylistSongCreateWithoutSongInput, Prisma.PlaylistSongUncheckedCreateWithoutSongInput> | Prisma.PlaylistSongCreateWithoutSongInput[] | Prisma.PlaylistSongUncheckedCreateWithoutSongInput[];
    connectOrCreate?: Prisma.PlaylistSongCreateOrConnectWithoutSongInput | Prisma.PlaylistSongCreateOrConnectWithoutSongInput[];
    upsert?: Prisma.PlaylistSongUpsertWithWhereUniqueWithoutSongInput | Prisma.PlaylistSongUpsertWithWhereUniqueWithoutSongInput[];
    createMany?: Prisma.PlaylistSongCreateManySongInputEnvelope;
    set?: Prisma.PlaylistSongWhereUniqueInput | Prisma.PlaylistSongWhereUniqueInput[];
    disconnect?: Prisma.PlaylistSongWhereUniqueInput | Prisma.PlaylistSongWhereUniqueInput[];
    delete?: Prisma.PlaylistSongWhereUniqueInput | Prisma.PlaylistSongWhereUniqueInput[];
    connect?: Prisma.PlaylistSongWhereUniqueInput | Prisma.PlaylistSongWhereUniqueInput[];
    update?: Prisma.PlaylistSongUpdateWithWhereUniqueWithoutSongInput | Prisma.PlaylistSongUpdateWithWhereUniqueWithoutSongInput[];
    updateMany?: Prisma.PlaylistSongUpdateManyWithWhereWithoutSongInput | Prisma.PlaylistSongUpdateManyWithWhereWithoutSongInput[];
    deleteMany?: Prisma.PlaylistSongScalarWhereInput | Prisma.PlaylistSongScalarWhereInput[];
};
export type PlaylistSongCreateNestedManyWithoutPlaylistInput = {
    create?: Prisma.XOR<Prisma.PlaylistSongCreateWithoutPlaylistInput, Prisma.PlaylistSongUncheckedCreateWithoutPlaylistInput> | Prisma.PlaylistSongCreateWithoutPlaylistInput[] | Prisma.PlaylistSongUncheckedCreateWithoutPlaylistInput[];
    connectOrCreate?: Prisma.PlaylistSongCreateOrConnectWithoutPlaylistInput | Prisma.PlaylistSongCreateOrConnectWithoutPlaylistInput[];
    createMany?: Prisma.PlaylistSongCreateManyPlaylistInputEnvelope;
    connect?: Prisma.PlaylistSongWhereUniqueInput | Prisma.PlaylistSongWhereUniqueInput[];
};
export type PlaylistSongUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: Prisma.XOR<Prisma.PlaylistSongCreateWithoutPlaylistInput, Prisma.PlaylistSongUncheckedCreateWithoutPlaylistInput> | Prisma.PlaylistSongCreateWithoutPlaylistInput[] | Prisma.PlaylistSongUncheckedCreateWithoutPlaylistInput[];
    connectOrCreate?: Prisma.PlaylistSongCreateOrConnectWithoutPlaylistInput | Prisma.PlaylistSongCreateOrConnectWithoutPlaylistInput[];
    createMany?: Prisma.PlaylistSongCreateManyPlaylistInputEnvelope;
    connect?: Prisma.PlaylistSongWhereUniqueInput | Prisma.PlaylistSongWhereUniqueInput[];
};
export type PlaylistSongUpdateManyWithoutPlaylistNestedInput = {
    create?: Prisma.XOR<Prisma.PlaylistSongCreateWithoutPlaylistInput, Prisma.PlaylistSongUncheckedCreateWithoutPlaylistInput> | Prisma.PlaylistSongCreateWithoutPlaylistInput[] | Prisma.PlaylistSongUncheckedCreateWithoutPlaylistInput[];
    connectOrCreate?: Prisma.PlaylistSongCreateOrConnectWithoutPlaylistInput | Prisma.PlaylistSongCreateOrConnectWithoutPlaylistInput[];
    upsert?: Prisma.PlaylistSongUpsertWithWhereUniqueWithoutPlaylistInput | Prisma.PlaylistSongUpsertWithWhereUniqueWithoutPlaylistInput[];
    createMany?: Prisma.PlaylistSongCreateManyPlaylistInputEnvelope;
    set?: Prisma.PlaylistSongWhereUniqueInput | Prisma.PlaylistSongWhereUniqueInput[];
    disconnect?: Prisma.PlaylistSongWhereUniqueInput | Prisma.PlaylistSongWhereUniqueInput[];
    delete?: Prisma.PlaylistSongWhereUniqueInput | Prisma.PlaylistSongWhereUniqueInput[];
    connect?: Prisma.PlaylistSongWhereUniqueInput | Prisma.PlaylistSongWhereUniqueInput[];
    update?: Prisma.PlaylistSongUpdateWithWhereUniqueWithoutPlaylistInput | Prisma.PlaylistSongUpdateWithWhereUniqueWithoutPlaylistInput[];
    updateMany?: Prisma.PlaylistSongUpdateManyWithWhereWithoutPlaylistInput | Prisma.PlaylistSongUpdateManyWithWhereWithoutPlaylistInput[];
    deleteMany?: Prisma.PlaylistSongScalarWhereInput | Prisma.PlaylistSongScalarWhereInput[];
};
export type PlaylistSongUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?: Prisma.XOR<Prisma.PlaylistSongCreateWithoutPlaylistInput, Prisma.PlaylistSongUncheckedCreateWithoutPlaylistInput> | Prisma.PlaylistSongCreateWithoutPlaylistInput[] | Prisma.PlaylistSongUncheckedCreateWithoutPlaylistInput[];
    connectOrCreate?: Prisma.PlaylistSongCreateOrConnectWithoutPlaylistInput | Prisma.PlaylistSongCreateOrConnectWithoutPlaylistInput[];
    upsert?: Prisma.PlaylistSongUpsertWithWhereUniqueWithoutPlaylistInput | Prisma.PlaylistSongUpsertWithWhereUniqueWithoutPlaylistInput[];
    createMany?: Prisma.PlaylistSongCreateManyPlaylistInputEnvelope;
    set?: Prisma.PlaylistSongWhereUniqueInput | Prisma.PlaylistSongWhereUniqueInput[];
    disconnect?: Prisma.PlaylistSongWhereUniqueInput | Prisma.PlaylistSongWhereUniqueInput[];
    delete?: Prisma.PlaylistSongWhereUniqueInput | Prisma.PlaylistSongWhereUniqueInput[];
    connect?: Prisma.PlaylistSongWhereUniqueInput | Prisma.PlaylistSongWhereUniqueInput[];
    update?: Prisma.PlaylistSongUpdateWithWhereUniqueWithoutPlaylistInput | Prisma.PlaylistSongUpdateWithWhereUniqueWithoutPlaylistInput[];
    updateMany?: Prisma.PlaylistSongUpdateManyWithWhereWithoutPlaylistInput | Prisma.PlaylistSongUpdateManyWithWhereWithoutPlaylistInput[];
    deleteMany?: Prisma.PlaylistSongScalarWhereInput | Prisma.PlaylistSongScalarWhereInput[];
};
export type PlaylistSongCreateWithoutSongInput = {
    id?: string;
    order?: number;
    addedAt?: Date | string;
    playlist: Prisma.PlaylistCreateNestedOneWithoutPlaylistSongsInput;
};
export type PlaylistSongUncheckedCreateWithoutSongInput = {
    id?: string;
    playlistId: string;
    order?: number;
    addedAt?: Date | string;
};
export type PlaylistSongCreateOrConnectWithoutSongInput = {
    where: Prisma.PlaylistSongWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlaylistSongCreateWithoutSongInput, Prisma.PlaylistSongUncheckedCreateWithoutSongInput>;
};
export type PlaylistSongCreateManySongInputEnvelope = {
    data: Prisma.PlaylistSongCreateManySongInput | Prisma.PlaylistSongCreateManySongInput[];
    skipDuplicates?: boolean;
};
export type PlaylistSongUpsertWithWhereUniqueWithoutSongInput = {
    where: Prisma.PlaylistSongWhereUniqueInput;
    update: Prisma.XOR<Prisma.PlaylistSongUpdateWithoutSongInput, Prisma.PlaylistSongUncheckedUpdateWithoutSongInput>;
    create: Prisma.XOR<Prisma.PlaylistSongCreateWithoutSongInput, Prisma.PlaylistSongUncheckedCreateWithoutSongInput>;
};
export type PlaylistSongUpdateWithWhereUniqueWithoutSongInput = {
    where: Prisma.PlaylistSongWhereUniqueInput;
    data: Prisma.XOR<Prisma.PlaylistSongUpdateWithoutSongInput, Prisma.PlaylistSongUncheckedUpdateWithoutSongInput>;
};
export type PlaylistSongUpdateManyWithWhereWithoutSongInput = {
    where: Prisma.PlaylistSongScalarWhereInput;
    data: Prisma.XOR<Prisma.PlaylistSongUpdateManyMutationInput, Prisma.PlaylistSongUncheckedUpdateManyWithoutSongInput>;
};
export type PlaylistSongScalarWhereInput = {
    AND?: Prisma.PlaylistSongScalarWhereInput | Prisma.PlaylistSongScalarWhereInput[];
    OR?: Prisma.PlaylistSongScalarWhereInput[];
    NOT?: Prisma.PlaylistSongScalarWhereInput | Prisma.PlaylistSongScalarWhereInput[];
    id?: Prisma.StringFilter<"PlaylistSong"> | string;
    playlistId?: Prisma.StringFilter<"PlaylistSong"> | string;
    songId?: Prisma.StringFilter<"PlaylistSong"> | string;
    order?: Prisma.IntFilter<"PlaylistSong"> | number;
    addedAt?: Prisma.DateTimeFilter<"PlaylistSong"> | Date | string;
};
export type PlaylistSongCreateWithoutPlaylistInput = {
    id?: string;
    order?: number;
    addedAt?: Date | string;
    song: Prisma.SongCreateNestedOneWithoutPlaylistSongsInput;
};
export type PlaylistSongUncheckedCreateWithoutPlaylistInput = {
    id?: string;
    songId: string;
    order?: number;
    addedAt?: Date | string;
};
export type PlaylistSongCreateOrConnectWithoutPlaylistInput = {
    where: Prisma.PlaylistSongWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlaylistSongCreateWithoutPlaylistInput, Prisma.PlaylistSongUncheckedCreateWithoutPlaylistInput>;
};
export type PlaylistSongCreateManyPlaylistInputEnvelope = {
    data: Prisma.PlaylistSongCreateManyPlaylistInput | Prisma.PlaylistSongCreateManyPlaylistInput[];
    skipDuplicates?: boolean;
};
export type PlaylistSongUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: Prisma.PlaylistSongWhereUniqueInput;
    update: Prisma.XOR<Prisma.PlaylistSongUpdateWithoutPlaylistInput, Prisma.PlaylistSongUncheckedUpdateWithoutPlaylistInput>;
    create: Prisma.XOR<Prisma.PlaylistSongCreateWithoutPlaylistInput, Prisma.PlaylistSongUncheckedCreateWithoutPlaylistInput>;
};
export type PlaylistSongUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: Prisma.PlaylistSongWhereUniqueInput;
    data: Prisma.XOR<Prisma.PlaylistSongUpdateWithoutPlaylistInput, Prisma.PlaylistSongUncheckedUpdateWithoutPlaylistInput>;
};
export type PlaylistSongUpdateManyWithWhereWithoutPlaylistInput = {
    where: Prisma.PlaylistSongScalarWhereInput;
    data: Prisma.XOR<Prisma.PlaylistSongUpdateManyMutationInput, Prisma.PlaylistSongUncheckedUpdateManyWithoutPlaylistInput>;
};
export type PlaylistSongCreateManySongInput = {
    id?: string;
    playlistId: string;
    order?: number;
    addedAt?: Date | string;
};
export type PlaylistSongUpdateWithoutSongInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    playlist?: Prisma.PlaylistUpdateOneRequiredWithoutPlaylistSongsNestedInput;
};
export type PlaylistSongUncheckedUpdateWithoutSongInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    playlistId?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlaylistSongUncheckedUpdateManyWithoutSongInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    playlistId?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlaylistSongCreateManyPlaylistInput = {
    id?: string;
    songId: string;
    order?: number;
    addedAt?: Date | string;
};
export type PlaylistSongUpdateWithoutPlaylistInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    song?: Prisma.SongUpdateOneRequiredWithoutPlaylistSongsNestedInput;
};
export type PlaylistSongUncheckedUpdateWithoutPlaylistInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    songId?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlaylistSongUncheckedUpdateManyWithoutPlaylistInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    songId?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PlaylistSongSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    playlistId?: boolean;
    songId?: boolean;
    order?: boolean;
    addedAt?: boolean;
    playlist?: boolean | Prisma.PlaylistDefaultArgs<ExtArgs>;
    song?: boolean | Prisma.SongDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["playlistSong"]>;
export type PlaylistSongSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    playlistId?: boolean;
    songId?: boolean;
    order?: boolean;
    addedAt?: boolean;
    playlist?: boolean | Prisma.PlaylistDefaultArgs<ExtArgs>;
    song?: boolean | Prisma.SongDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["playlistSong"]>;
export type PlaylistSongSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    playlistId?: boolean;
    songId?: boolean;
    order?: boolean;
    addedAt?: boolean;
    playlist?: boolean | Prisma.PlaylistDefaultArgs<ExtArgs>;
    song?: boolean | Prisma.SongDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["playlistSong"]>;
export type PlaylistSongSelectScalar = {
    id?: boolean;
    playlistId?: boolean;
    songId?: boolean;
    order?: boolean;
    addedAt?: boolean;
};
export type PlaylistSongOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "playlistId" | "songId" | "order" | "addedAt", ExtArgs["result"]["playlistSong"]>;
export type PlaylistSongInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    playlist?: boolean | Prisma.PlaylistDefaultArgs<ExtArgs>;
    song?: boolean | Prisma.SongDefaultArgs<ExtArgs>;
};
export type PlaylistSongIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    playlist?: boolean | Prisma.PlaylistDefaultArgs<ExtArgs>;
    song?: boolean | Prisma.SongDefaultArgs<ExtArgs>;
};
export type PlaylistSongIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    playlist?: boolean | Prisma.PlaylistDefaultArgs<ExtArgs>;
    song?: boolean | Prisma.SongDefaultArgs<ExtArgs>;
};
export type $PlaylistSongPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PlaylistSong";
    objects: {
        playlist: Prisma.$PlaylistPayload<ExtArgs>;
        song: Prisma.$SongPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        playlistId: string;
        songId: string;
        order: number;
        addedAt: Date;
    }, ExtArgs["result"]["playlistSong"]>;
    composites: {};
};
export type PlaylistSongGetPayload<S extends boolean | null | undefined | PlaylistSongDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PlaylistSongPayload, S>;
export type PlaylistSongCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PlaylistSongFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PlaylistSongCountAggregateInputType | true;
};
export interface PlaylistSongDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PlaylistSong'];
        meta: {
            name: 'PlaylistSong';
        };
    };
    findUnique<T extends PlaylistSongFindUniqueArgs>(args: Prisma.SelectSubset<T, PlaylistSongFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PlaylistSongClient<runtime.Types.Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PlaylistSongFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PlaylistSongFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlaylistSongClient<runtime.Types.Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PlaylistSongFindFirstArgs>(args?: Prisma.SelectSubset<T, PlaylistSongFindFirstArgs<ExtArgs>>): Prisma.Prisma__PlaylistSongClient<runtime.Types.Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PlaylistSongFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PlaylistSongFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlaylistSongClient<runtime.Types.Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PlaylistSongFindManyArgs>(args?: Prisma.SelectSubset<T, PlaylistSongFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PlaylistSongCreateArgs>(args: Prisma.SelectSubset<T, PlaylistSongCreateArgs<ExtArgs>>): Prisma.Prisma__PlaylistSongClient<runtime.Types.Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PlaylistSongCreateManyArgs>(args?: Prisma.SelectSubset<T, PlaylistSongCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PlaylistSongCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PlaylistSongCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PlaylistSongDeleteArgs>(args: Prisma.SelectSubset<T, PlaylistSongDeleteArgs<ExtArgs>>): Prisma.Prisma__PlaylistSongClient<runtime.Types.Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PlaylistSongUpdateArgs>(args: Prisma.SelectSubset<T, PlaylistSongUpdateArgs<ExtArgs>>): Prisma.Prisma__PlaylistSongClient<runtime.Types.Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PlaylistSongDeleteManyArgs>(args?: Prisma.SelectSubset<T, PlaylistSongDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PlaylistSongUpdateManyArgs>(args: Prisma.SelectSubset<T, PlaylistSongUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PlaylistSongUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PlaylistSongUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PlaylistSongUpsertArgs>(args: Prisma.SelectSubset<T, PlaylistSongUpsertArgs<ExtArgs>>): Prisma.Prisma__PlaylistSongClient<runtime.Types.Result.GetResult<Prisma.$PlaylistSongPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PlaylistSongCountArgs>(args?: Prisma.Subset<T, PlaylistSongCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PlaylistSongCountAggregateOutputType> : number>;
    aggregate<T extends PlaylistSongAggregateArgs>(args: Prisma.Subset<T, PlaylistSongAggregateArgs>): Prisma.PrismaPromise<GetPlaylistSongAggregateType<T>>;
    groupBy<T extends PlaylistSongGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PlaylistSongGroupByArgs['orderBy'];
    } : {
        orderBy?: PlaylistSongGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PlaylistSongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PlaylistSongFieldRefs;
}
export interface Prisma__PlaylistSongClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    playlist<T extends Prisma.PlaylistDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PlaylistDefaultArgs<ExtArgs>>): Prisma.Prisma__PlaylistClient<runtime.Types.Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    song<T extends Prisma.SongDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SongDefaultArgs<ExtArgs>>): Prisma.Prisma__SongClient<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PlaylistSongFieldRefs {
    readonly id: Prisma.FieldRef<"PlaylistSong", 'String'>;
    readonly playlistId: Prisma.FieldRef<"PlaylistSong", 'String'>;
    readonly songId: Prisma.FieldRef<"PlaylistSong", 'String'>;
    readonly order: Prisma.FieldRef<"PlaylistSong", 'Int'>;
    readonly addedAt: Prisma.FieldRef<"PlaylistSong", 'DateTime'>;
}
export type PlaylistSongFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlaylistSongSelect<ExtArgs> | null;
    omit?: Prisma.PlaylistSongOmit<ExtArgs> | null;
    include?: Prisma.PlaylistSongInclude<ExtArgs> | null;
    where: Prisma.PlaylistSongWhereUniqueInput;
};
export type PlaylistSongFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlaylistSongSelect<ExtArgs> | null;
    omit?: Prisma.PlaylistSongOmit<ExtArgs> | null;
    include?: Prisma.PlaylistSongInclude<ExtArgs> | null;
    where: Prisma.PlaylistSongWhereUniqueInput;
};
export type PlaylistSongFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PlaylistSongFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PlaylistSongFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PlaylistSongCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlaylistSongSelect<ExtArgs> | null;
    omit?: Prisma.PlaylistSongOmit<ExtArgs> | null;
    include?: Prisma.PlaylistSongInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlaylistSongCreateInput, Prisma.PlaylistSongUncheckedCreateInput>;
};
export type PlaylistSongCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PlaylistSongCreateManyInput | Prisma.PlaylistSongCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PlaylistSongCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlaylistSongSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PlaylistSongOmit<ExtArgs> | null;
    data: Prisma.PlaylistSongCreateManyInput | Prisma.PlaylistSongCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PlaylistSongIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PlaylistSongUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlaylistSongSelect<ExtArgs> | null;
    omit?: Prisma.PlaylistSongOmit<ExtArgs> | null;
    include?: Prisma.PlaylistSongInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlaylistSongUpdateInput, Prisma.PlaylistSongUncheckedUpdateInput>;
    where: Prisma.PlaylistSongWhereUniqueInput;
};
export type PlaylistSongUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PlaylistSongUpdateManyMutationInput, Prisma.PlaylistSongUncheckedUpdateManyInput>;
    where?: Prisma.PlaylistSongWhereInput;
    limit?: number;
};
export type PlaylistSongUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlaylistSongSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PlaylistSongOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlaylistSongUpdateManyMutationInput, Prisma.PlaylistSongUncheckedUpdateManyInput>;
    where?: Prisma.PlaylistSongWhereInput;
    limit?: number;
    include?: Prisma.PlaylistSongIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PlaylistSongUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlaylistSongSelect<ExtArgs> | null;
    omit?: Prisma.PlaylistSongOmit<ExtArgs> | null;
    include?: Prisma.PlaylistSongInclude<ExtArgs> | null;
    where: Prisma.PlaylistSongWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlaylistSongCreateInput, Prisma.PlaylistSongUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PlaylistSongUpdateInput, Prisma.PlaylistSongUncheckedUpdateInput>;
};
export type PlaylistSongDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlaylistSongSelect<ExtArgs> | null;
    omit?: Prisma.PlaylistSongOmit<ExtArgs> | null;
    include?: Prisma.PlaylistSongInclude<ExtArgs> | null;
    where: Prisma.PlaylistSongWhereUniqueInput;
};
export type PlaylistSongDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlaylistSongWhereInput;
    limit?: number;
};
export type PlaylistSongDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlaylistSongSelect<ExtArgs> | null;
    omit?: Prisma.PlaylistSongOmit<ExtArgs> | null;
    include?: Prisma.PlaylistSongInclude<ExtArgs> | null;
};
export {};
