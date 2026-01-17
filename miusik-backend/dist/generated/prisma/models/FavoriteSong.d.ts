import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FavoriteSongModel = runtime.Types.Result.DefaultSelection<Prisma.$FavoriteSongPayload>;
export type AggregateFavoriteSong = {
    _count: FavoriteSongCountAggregateOutputType | null;
    _min: FavoriteSongMinAggregateOutputType | null;
    _max: FavoriteSongMaxAggregateOutputType | null;
};
export type FavoriteSongMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    songId: string | null;
    addedAt: Date | null;
};
export type FavoriteSongMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    songId: string | null;
    addedAt: Date | null;
};
export type FavoriteSongCountAggregateOutputType = {
    id: number;
    userId: number;
    songId: number;
    addedAt: number;
    _all: number;
};
export type FavoriteSongMinAggregateInputType = {
    id?: true;
    userId?: true;
    songId?: true;
    addedAt?: true;
};
export type FavoriteSongMaxAggregateInputType = {
    id?: true;
    userId?: true;
    songId?: true;
    addedAt?: true;
};
export type FavoriteSongCountAggregateInputType = {
    id?: true;
    userId?: true;
    songId?: true;
    addedAt?: true;
    _all?: true;
};
export type FavoriteSongAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FavoriteSongWhereInput;
    orderBy?: Prisma.FavoriteSongOrderByWithRelationInput | Prisma.FavoriteSongOrderByWithRelationInput[];
    cursor?: Prisma.FavoriteSongWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FavoriteSongCountAggregateInputType;
    _min?: FavoriteSongMinAggregateInputType;
    _max?: FavoriteSongMaxAggregateInputType;
};
export type GetFavoriteSongAggregateType<T extends FavoriteSongAggregateArgs> = {
    [P in keyof T & keyof AggregateFavoriteSong]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFavoriteSong[P]> : Prisma.GetScalarType<T[P], AggregateFavoriteSong[P]>;
};
export type FavoriteSongGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FavoriteSongWhereInput;
    orderBy?: Prisma.FavoriteSongOrderByWithAggregationInput | Prisma.FavoriteSongOrderByWithAggregationInput[];
    by: Prisma.FavoriteSongScalarFieldEnum[] | Prisma.FavoriteSongScalarFieldEnum;
    having?: Prisma.FavoriteSongScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FavoriteSongCountAggregateInputType | true;
    _min?: FavoriteSongMinAggregateInputType;
    _max?: FavoriteSongMaxAggregateInputType;
};
export type FavoriteSongGroupByOutputType = {
    id: string;
    userId: string;
    songId: string;
    addedAt: Date;
    _count: FavoriteSongCountAggregateOutputType | null;
    _min: FavoriteSongMinAggregateOutputType | null;
    _max: FavoriteSongMaxAggregateOutputType | null;
};
type GetFavoriteSongGroupByPayload<T extends FavoriteSongGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FavoriteSongGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FavoriteSongGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FavoriteSongGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FavoriteSongGroupByOutputType[P]>;
}>>;
export type FavoriteSongWhereInput = {
    AND?: Prisma.FavoriteSongWhereInput | Prisma.FavoriteSongWhereInput[];
    OR?: Prisma.FavoriteSongWhereInput[];
    NOT?: Prisma.FavoriteSongWhereInput | Prisma.FavoriteSongWhereInput[];
    id?: Prisma.StringFilter<"FavoriteSong"> | string;
    userId?: Prisma.StringFilter<"FavoriteSong"> | string;
    songId?: Prisma.StringFilter<"FavoriteSong"> | string;
    addedAt?: Prisma.DateTimeFilter<"FavoriteSong"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    song?: Prisma.XOR<Prisma.SongScalarRelationFilter, Prisma.SongWhereInput>;
};
export type FavoriteSongOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    songId?: Prisma.SortOrder;
    addedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    song?: Prisma.SongOrderByWithRelationInput;
};
export type FavoriteSongWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_songId?: Prisma.FavoriteSongUserIdSongIdCompoundUniqueInput;
    AND?: Prisma.FavoriteSongWhereInput | Prisma.FavoriteSongWhereInput[];
    OR?: Prisma.FavoriteSongWhereInput[];
    NOT?: Prisma.FavoriteSongWhereInput | Prisma.FavoriteSongWhereInput[];
    userId?: Prisma.StringFilter<"FavoriteSong"> | string;
    songId?: Prisma.StringFilter<"FavoriteSong"> | string;
    addedAt?: Prisma.DateTimeFilter<"FavoriteSong"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    song?: Prisma.XOR<Prisma.SongScalarRelationFilter, Prisma.SongWhereInput>;
}, "id" | "userId_songId">;
export type FavoriteSongOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    songId?: Prisma.SortOrder;
    addedAt?: Prisma.SortOrder;
    _count?: Prisma.FavoriteSongCountOrderByAggregateInput;
    _max?: Prisma.FavoriteSongMaxOrderByAggregateInput;
    _min?: Prisma.FavoriteSongMinOrderByAggregateInput;
};
export type FavoriteSongScalarWhereWithAggregatesInput = {
    AND?: Prisma.FavoriteSongScalarWhereWithAggregatesInput | Prisma.FavoriteSongScalarWhereWithAggregatesInput[];
    OR?: Prisma.FavoriteSongScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FavoriteSongScalarWhereWithAggregatesInput | Prisma.FavoriteSongScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"FavoriteSong"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"FavoriteSong"> | string;
    songId?: Prisma.StringWithAggregatesFilter<"FavoriteSong"> | string;
    addedAt?: Prisma.DateTimeWithAggregatesFilter<"FavoriteSong"> | Date | string;
};
export type FavoriteSongCreateInput = {
    id?: string;
    addedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutFavoriteSongsInput;
    song: Prisma.SongCreateNestedOneWithoutFavoritedByInput;
};
export type FavoriteSongUncheckedCreateInput = {
    id?: string;
    userId: string;
    songId: string;
    addedAt?: Date | string;
};
export type FavoriteSongUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutFavoriteSongsNestedInput;
    song?: Prisma.SongUpdateOneRequiredWithoutFavoritedByNestedInput;
};
export type FavoriteSongUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    songId?: Prisma.StringFieldUpdateOperationsInput | string;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FavoriteSongCreateManyInput = {
    id?: string;
    userId: string;
    songId: string;
    addedAt?: Date | string;
};
export type FavoriteSongUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FavoriteSongUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    songId?: Prisma.StringFieldUpdateOperationsInput | string;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FavoriteSongListRelationFilter = {
    every?: Prisma.FavoriteSongWhereInput;
    some?: Prisma.FavoriteSongWhereInput;
    none?: Prisma.FavoriteSongWhereInput;
};
export type FavoriteSongOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FavoriteSongUserIdSongIdCompoundUniqueInput = {
    userId: string;
    songId: string;
};
export type FavoriteSongCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    songId?: Prisma.SortOrder;
    addedAt?: Prisma.SortOrder;
};
export type FavoriteSongMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    songId?: Prisma.SortOrder;
    addedAt?: Prisma.SortOrder;
};
export type FavoriteSongMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    songId?: Prisma.SortOrder;
    addedAt?: Prisma.SortOrder;
};
export type FavoriteSongCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.FavoriteSongCreateWithoutUserInput, Prisma.FavoriteSongUncheckedCreateWithoutUserInput> | Prisma.FavoriteSongCreateWithoutUserInput[] | Prisma.FavoriteSongUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FavoriteSongCreateOrConnectWithoutUserInput | Prisma.FavoriteSongCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.FavoriteSongCreateManyUserInputEnvelope;
    connect?: Prisma.FavoriteSongWhereUniqueInput | Prisma.FavoriteSongWhereUniqueInput[];
};
export type FavoriteSongUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.FavoriteSongCreateWithoutUserInput, Prisma.FavoriteSongUncheckedCreateWithoutUserInput> | Prisma.FavoriteSongCreateWithoutUserInput[] | Prisma.FavoriteSongUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FavoriteSongCreateOrConnectWithoutUserInput | Prisma.FavoriteSongCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.FavoriteSongCreateManyUserInputEnvelope;
    connect?: Prisma.FavoriteSongWhereUniqueInput | Prisma.FavoriteSongWhereUniqueInput[];
};
export type FavoriteSongUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.FavoriteSongCreateWithoutUserInput, Prisma.FavoriteSongUncheckedCreateWithoutUserInput> | Prisma.FavoriteSongCreateWithoutUserInput[] | Prisma.FavoriteSongUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FavoriteSongCreateOrConnectWithoutUserInput | Prisma.FavoriteSongCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.FavoriteSongUpsertWithWhereUniqueWithoutUserInput | Prisma.FavoriteSongUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.FavoriteSongCreateManyUserInputEnvelope;
    set?: Prisma.FavoriteSongWhereUniqueInput | Prisma.FavoriteSongWhereUniqueInput[];
    disconnect?: Prisma.FavoriteSongWhereUniqueInput | Prisma.FavoriteSongWhereUniqueInput[];
    delete?: Prisma.FavoriteSongWhereUniqueInput | Prisma.FavoriteSongWhereUniqueInput[];
    connect?: Prisma.FavoriteSongWhereUniqueInput | Prisma.FavoriteSongWhereUniqueInput[];
    update?: Prisma.FavoriteSongUpdateWithWhereUniqueWithoutUserInput | Prisma.FavoriteSongUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.FavoriteSongUpdateManyWithWhereWithoutUserInput | Prisma.FavoriteSongUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.FavoriteSongScalarWhereInput | Prisma.FavoriteSongScalarWhereInput[];
};
export type FavoriteSongUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.FavoriteSongCreateWithoutUserInput, Prisma.FavoriteSongUncheckedCreateWithoutUserInput> | Prisma.FavoriteSongCreateWithoutUserInput[] | Prisma.FavoriteSongUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FavoriteSongCreateOrConnectWithoutUserInput | Prisma.FavoriteSongCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.FavoriteSongUpsertWithWhereUniqueWithoutUserInput | Prisma.FavoriteSongUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.FavoriteSongCreateManyUserInputEnvelope;
    set?: Prisma.FavoriteSongWhereUniqueInput | Prisma.FavoriteSongWhereUniqueInput[];
    disconnect?: Prisma.FavoriteSongWhereUniqueInput | Prisma.FavoriteSongWhereUniqueInput[];
    delete?: Prisma.FavoriteSongWhereUniqueInput | Prisma.FavoriteSongWhereUniqueInput[];
    connect?: Prisma.FavoriteSongWhereUniqueInput | Prisma.FavoriteSongWhereUniqueInput[];
    update?: Prisma.FavoriteSongUpdateWithWhereUniqueWithoutUserInput | Prisma.FavoriteSongUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.FavoriteSongUpdateManyWithWhereWithoutUserInput | Prisma.FavoriteSongUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.FavoriteSongScalarWhereInput | Prisma.FavoriteSongScalarWhereInput[];
};
export type FavoriteSongCreateNestedManyWithoutSongInput = {
    create?: Prisma.XOR<Prisma.FavoriteSongCreateWithoutSongInput, Prisma.FavoriteSongUncheckedCreateWithoutSongInput> | Prisma.FavoriteSongCreateWithoutSongInput[] | Prisma.FavoriteSongUncheckedCreateWithoutSongInput[];
    connectOrCreate?: Prisma.FavoriteSongCreateOrConnectWithoutSongInput | Prisma.FavoriteSongCreateOrConnectWithoutSongInput[];
    createMany?: Prisma.FavoriteSongCreateManySongInputEnvelope;
    connect?: Prisma.FavoriteSongWhereUniqueInput | Prisma.FavoriteSongWhereUniqueInput[];
};
export type FavoriteSongUncheckedCreateNestedManyWithoutSongInput = {
    create?: Prisma.XOR<Prisma.FavoriteSongCreateWithoutSongInput, Prisma.FavoriteSongUncheckedCreateWithoutSongInput> | Prisma.FavoriteSongCreateWithoutSongInput[] | Prisma.FavoriteSongUncheckedCreateWithoutSongInput[];
    connectOrCreate?: Prisma.FavoriteSongCreateOrConnectWithoutSongInput | Prisma.FavoriteSongCreateOrConnectWithoutSongInput[];
    createMany?: Prisma.FavoriteSongCreateManySongInputEnvelope;
    connect?: Prisma.FavoriteSongWhereUniqueInput | Prisma.FavoriteSongWhereUniqueInput[];
};
export type FavoriteSongUpdateManyWithoutSongNestedInput = {
    create?: Prisma.XOR<Prisma.FavoriteSongCreateWithoutSongInput, Prisma.FavoriteSongUncheckedCreateWithoutSongInput> | Prisma.FavoriteSongCreateWithoutSongInput[] | Prisma.FavoriteSongUncheckedCreateWithoutSongInput[];
    connectOrCreate?: Prisma.FavoriteSongCreateOrConnectWithoutSongInput | Prisma.FavoriteSongCreateOrConnectWithoutSongInput[];
    upsert?: Prisma.FavoriteSongUpsertWithWhereUniqueWithoutSongInput | Prisma.FavoriteSongUpsertWithWhereUniqueWithoutSongInput[];
    createMany?: Prisma.FavoriteSongCreateManySongInputEnvelope;
    set?: Prisma.FavoriteSongWhereUniqueInput | Prisma.FavoriteSongWhereUniqueInput[];
    disconnect?: Prisma.FavoriteSongWhereUniqueInput | Prisma.FavoriteSongWhereUniqueInput[];
    delete?: Prisma.FavoriteSongWhereUniqueInput | Prisma.FavoriteSongWhereUniqueInput[];
    connect?: Prisma.FavoriteSongWhereUniqueInput | Prisma.FavoriteSongWhereUniqueInput[];
    update?: Prisma.FavoriteSongUpdateWithWhereUniqueWithoutSongInput | Prisma.FavoriteSongUpdateWithWhereUniqueWithoutSongInput[];
    updateMany?: Prisma.FavoriteSongUpdateManyWithWhereWithoutSongInput | Prisma.FavoriteSongUpdateManyWithWhereWithoutSongInput[];
    deleteMany?: Prisma.FavoriteSongScalarWhereInput | Prisma.FavoriteSongScalarWhereInput[];
};
export type FavoriteSongUncheckedUpdateManyWithoutSongNestedInput = {
    create?: Prisma.XOR<Prisma.FavoriteSongCreateWithoutSongInput, Prisma.FavoriteSongUncheckedCreateWithoutSongInput> | Prisma.FavoriteSongCreateWithoutSongInput[] | Prisma.FavoriteSongUncheckedCreateWithoutSongInput[];
    connectOrCreate?: Prisma.FavoriteSongCreateOrConnectWithoutSongInput | Prisma.FavoriteSongCreateOrConnectWithoutSongInput[];
    upsert?: Prisma.FavoriteSongUpsertWithWhereUniqueWithoutSongInput | Prisma.FavoriteSongUpsertWithWhereUniqueWithoutSongInput[];
    createMany?: Prisma.FavoriteSongCreateManySongInputEnvelope;
    set?: Prisma.FavoriteSongWhereUniqueInput | Prisma.FavoriteSongWhereUniqueInput[];
    disconnect?: Prisma.FavoriteSongWhereUniqueInput | Prisma.FavoriteSongWhereUniqueInput[];
    delete?: Prisma.FavoriteSongWhereUniqueInput | Prisma.FavoriteSongWhereUniqueInput[];
    connect?: Prisma.FavoriteSongWhereUniqueInput | Prisma.FavoriteSongWhereUniqueInput[];
    update?: Prisma.FavoriteSongUpdateWithWhereUniqueWithoutSongInput | Prisma.FavoriteSongUpdateWithWhereUniqueWithoutSongInput[];
    updateMany?: Prisma.FavoriteSongUpdateManyWithWhereWithoutSongInput | Prisma.FavoriteSongUpdateManyWithWhereWithoutSongInput[];
    deleteMany?: Prisma.FavoriteSongScalarWhereInput | Prisma.FavoriteSongScalarWhereInput[];
};
export type FavoriteSongCreateWithoutUserInput = {
    id?: string;
    addedAt?: Date | string;
    song: Prisma.SongCreateNestedOneWithoutFavoritedByInput;
};
export type FavoriteSongUncheckedCreateWithoutUserInput = {
    id?: string;
    songId: string;
    addedAt?: Date | string;
};
export type FavoriteSongCreateOrConnectWithoutUserInput = {
    where: Prisma.FavoriteSongWhereUniqueInput;
    create: Prisma.XOR<Prisma.FavoriteSongCreateWithoutUserInput, Prisma.FavoriteSongUncheckedCreateWithoutUserInput>;
};
export type FavoriteSongCreateManyUserInputEnvelope = {
    data: Prisma.FavoriteSongCreateManyUserInput | Prisma.FavoriteSongCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type FavoriteSongUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.FavoriteSongWhereUniqueInput;
    update: Prisma.XOR<Prisma.FavoriteSongUpdateWithoutUserInput, Prisma.FavoriteSongUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.FavoriteSongCreateWithoutUserInput, Prisma.FavoriteSongUncheckedCreateWithoutUserInput>;
};
export type FavoriteSongUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.FavoriteSongWhereUniqueInput;
    data: Prisma.XOR<Prisma.FavoriteSongUpdateWithoutUserInput, Prisma.FavoriteSongUncheckedUpdateWithoutUserInput>;
};
export type FavoriteSongUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.FavoriteSongScalarWhereInput;
    data: Prisma.XOR<Prisma.FavoriteSongUpdateManyMutationInput, Prisma.FavoriteSongUncheckedUpdateManyWithoutUserInput>;
};
export type FavoriteSongScalarWhereInput = {
    AND?: Prisma.FavoriteSongScalarWhereInput | Prisma.FavoriteSongScalarWhereInput[];
    OR?: Prisma.FavoriteSongScalarWhereInput[];
    NOT?: Prisma.FavoriteSongScalarWhereInput | Prisma.FavoriteSongScalarWhereInput[];
    id?: Prisma.StringFilter<"FavoriteSong"> | string;
    userId?: Prisma.StringFilter<"FavoriteSong"> | string;
    songId?: Prisma.StringFilter<"FavoriteSong"> | string;
    addedAt?: Prisma.DateTimeFilter<"FavoriteSong"> | Date | string;
};
export type FavoriteSongCreateWithoutSongInput = {
    id?: string;
    addedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutFavoriteSongsInput;
};
export type FavoriteSongUncheckedCreateWithoutSongInput = {
    id?: string;
    userId: string;
    addedAt?: Date | string;
};
export type FavoriteSongCreateOrConnectWithoutSongInput = {
    where: Prisma.FavoriteSongWhereUniqueInput;
    create: Prisma.XOR<Prisma.FavoriteSongCreateWithoutSongInput, Prisma.FavoriteSongUncheckedCreateWithoutSongInput>;
};
export type FavoriteSongCreateManySongInputEnvelope = {
    data: Prisma.FavoriteSongCreateManySongInput | Prisma.FavoriteSongCreateManySongInput[];
    skipDuplicates?: boolean;
};
export type FavoriteSongUpsertWithWhereUniqueWithoutSongInput = {
    where: Prisma.FavoriteSongWhereUniqueInput;
    update: Prisma.XOR<Prisma.FavoriteSongUpdateWithoutSongInput, Prisma.FavoriteSongUncheckedUpdateWithoutSongInput>;
    create: Prisma.XOR<Prisma.FavoriteSongCreateWithoutSongInput, Prisma.FavoriteSongUncheckedCreateWithoutSongInput>;
};
export type FavoriteSongUpdateWithWhereUniqueWithoutSongInput = {
    where: Prisma.FavoriteSongWhereUniqueInput;
    data: Prisma.XOR<Prisma.FavoriteSongUpdateWithoutSongInput, Prisma.FavoriteSongUncheckedUpdateWithoutSongInput>;
};
export type FavoriteSongUpdateManyWithWhereWithoutSongInput = {
    where: Prisma.FavoriteSongScalarWhereInput;
    data: Prisma.XOR<Prisma.FavoriteSongUpdateManyMutationInput, Prisma.FavoriteSongUncheckedUpdateManyWithoutSongInput>;
};
export type FavoriteSongCreateManyUserInput = {
    id?: string;
    songId: string;
    addedAt?: Date | string;
};
export type FavoriteSongUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    song?: Prisma.SongUpdateOneRequiredWithoutFavoritedByNestedInput;
};
export type FavoriteSongUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    songId?: Prisma.StringFieldUpdateOperationsInput | string;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FavoriteSongUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    songId?: Prisma.StringFieldUpdateOperationsInput | string;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FavoriteSongCreateManySongInput = {
    id?: string;
    userId: string;
    addedAt?: Date | string;
};
export type FavoriteSongUpdateWithoutSongInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutFavoriteSongsNestedInput;
};
export type FavoriteSongUncheckedUpdateWithoutSongInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FavoriteSongUncheckedUpdateManyWithoutSongInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FavoriteSongSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    songId?: boolean;
    addedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    song?: boolean | Prisma.SongDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["favoriteSong"]>;
export type FavoriteSongSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    songId?: boolean;
    addedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    song?: boolean | Prisma.SongDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["favoriteSong"]>;
export type FavoriteSongSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    songId?: boolean;
    addedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    song?: boolean | Prisma.SongDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["favoriteSong"]>;
export type FavoriteSongSelectScalar = {
    id?: boolean;
    userId?: boolean;
    songId?: boolean;
    addedAt?: boolean;
};
export type FavoriteSongOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "songId" | "addedAt", ExtArgs["result"]["favoriteSong"]>;
export type FavoriteSongInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    song?: boolean | Prisma.SongDefaultArgs<ExtArgs>;
};
export type FavoriteSongIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    song?: boolean | Prisma.SongDefaultArgs<ExtArgs>;
};
export type FavoriteSongIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    song?: boolean | Prisma.SongDefaultArgs<ExtArgs>;
};
export type $FavoriteSongPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FavoriteSong";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        song: Prisma.$SongPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        songId: string;
        addedAt: Date;
    }, ExtArgs["result"]["favoriteSong"]>;
    composites: {};
};
export type FavoriteSongGetPayload<S extends boolean | null | undefined | FavoriteSongDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FavoriteSongPayload, S>;
export type FavoriteSongCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FavoriteSongFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FavoriteSongCountAggregateInputType | true;
};
export interface FavoriteSongDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FavoriteSong'];
        meta: {
            name: 'FavoriteSong';
        };
    };
    findUnique<T extends FavoriteSongFindUniqueArgs>(args: Prisma.SelectSubset<T, FavoriteSongFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FavoriteSongClient<runtime.Types.Result.GetResult<Prisma.$FavoriteSongPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FavoriteSongFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FavoriteSongFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FavoriteSongClient<runtime.Types.Result.GetResult<Prisma.$FavoriteSongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FavoriteSongFindFirstArgs>(args?: Prisma.SelectSubset<T, FavoriteSongFindFirstArgs<ExtArgs>>): Prisma.Prisma__FavoriteSongClient<runtime.Types.Result.GetResult<Prisma.$FavoriteSongPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FavoriteSongFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FavoriteSongFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FavoriteSongClient<runtime.Types.Result.GetResult<Prisma.$FavoriteSongPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FavoriteSongFindManyArgs>(args?: Prisma.SelectSubset<T, FavoriteSongFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FavoriteSongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FavoriteSongCreateArgs>(args: Prisma.SelectSubset<T, FavoriteSongCreateArgs<ExtArgs>>): Prisma.Prisma__FavoriteSongClient<runtime.Types.Result.GetResult<Prisma.$FavoriteSongPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FavoriteSongCreateManyArgs>(args?: Prisma.SelectSubset<T, FavoriteSongCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FavoriteSongCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FavoriteSongCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FavoriteSongPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FavoriteSongDeleteArgs>(args: Prisma.SelectSubset<T, FavoriteSongDeleteArgs<ExtArgs>>): Prisma.Prisma__FavoriteSongClient<runtime.Types.Result.GetResult<Prisma.$FavoriteSongPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FavoriteSongUpdateArgs>(args: Prisma.SelectSubset<T, FavoriteSongUpdateArgs<ExtArgs>>): Prisma.Prisma__FavoriteSongClient<runtime.Types.Result.GetResult<Prisma.$FavoriteSongPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FavoriteSongDeleteManyArgs>(args?: Prisma.SelectSubset<T, FavoriteSongDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FavoriteSongUpdateManyArgs>(args: Prisma.SelectSubset<T, FavoriteSongUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FavoriteSongUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FavoriteSongUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FavoriteSongPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FavoriteSongUpsertArgs>(args: Prisma.SelectSubset<T, FavoriteSongUpsertArgs<ExtArgs>>): Prisma.Prisma__FavoriteSongClient<runtime.Types.Result.GetResult<Prisma.$FavoriteSongPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FavoriteSongCountArgs>(args?: Prisma.Subset<T, FavoriteSongCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FavoriteSongCountAggregateOutputType> : number>;
    aggregate<T extends FavoriteSongAggregateArgs>(args: Prisma.Subset<T, FavoriteSongAggregateArgs>): Prisma.PrismaPromise<GetFavoriteSongAggregateType<T>>;
    groupBy<T extends FavoriteSongGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FavoriteSongGroupByArgs['orderBy'];
    } : {
        orderBy?: FavoriteSongGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FavoriteSongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteSongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FavoriteSongFieldRefs;
}
export interface Prisma__FavoriteSongClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    song<T extends Prisma.SongDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SongDefaultArgs<ExtArgs>>): Prisma.Prisma__SongClient<runtime.Types.Result.GetResult<Prisma.$SongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FavoriteSongFieldRefs {
    readonly id: Prisma.FieldRef<"FavoriteSong", 'String'>;
    readonly userId: Prisma.FieldRef<"FavoriteSong", 'String'>;
    readonly songId: Prisma.FieldRef<"FavoriteSong", 'String'>;
    readonly addedAt: Prisma.FieldRef<"FavoriteSong", 'DateTime'>;
}
export type FavoriteSongFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FavoriteSongSelect<ExtArgs> | null;
    omit?: Prisma.FavoriteSongOmit<ExtArgs> | null;
    include?: Prisma.FavoriteSongInclude<ExtArgs> | null;
    where: Prisma.FavoriteSongWhereUniqueInput;
};
export type FavoriteSongFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FavoriteSongSelect<ExtArgs> | null;
    omit?: Prisma.FavoriteSongOmit<ExtArgs> | null;
    include?: Prisma.FavoriteSongInclude<ExtArgs> | null;
    where: Prisma.FavoriteSongWhereUniqueInput;
};
export type FavoriteSongFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FavoriteSongFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FavoriteSongFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FavoriteSongCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FavoriteSongSelect<ExtArgs> | null;
    omit?: Prisma.FavoriteSongOmit<ExtArgs> | null;
    include?: Prisma.FavoriteSongInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FavoriteSongCreateInput, Prisma.FavoriteSongUncheckedCreateInput>;
};
export type FavoriteSongCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FavoriteSongCreateManyInput | Prisma.FavoriteSongCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FavoriteSongCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FavoriteSongSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FavoriteSongOmit<ExtArgs> | null;
    data: Prisma.FavoriteSongCreateManyInput | Prisma.FavoriteSongCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.FavoriteSongIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FavoriteSongUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FavoriteSongSelect<ExtArgs> | null;
    omit?: Prisma.FavoriteSongOmit<ExtArgs> | null;
    include?: Prisma.FavoriteSongInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FavoriteSongUpdateInput, Prisma.FavoriteSongUncheckedUpdateInput>;
    where: Prisma.FavoriteSongWhereUniqueInput;
};
export type FavoriteSongUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FavoriteSongUpdateManyMutationInput, Prisma.FavoriteSongUncheckedUpdateManyInput>;
    where?: Prisma.FavoriteSongWhereInput;
    limit?: number;
};
export type FavoriteSongUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FavoriteSongSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FavoriteSongOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FavoriteSongUpdateManyMutationInput, Prisma.FavoriteSongUncheckedUpdateManyInput>;
    where?: Prisma.FavoriteSongWhereInput;
    limit?: number;
    include?: Prisma.FavoriteSongIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FavoriteSongUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FavoriteSongSelect<ExtArgs> | null;
    omit?: Prisma.FavoriteSongOmit<ExtArgs> | null;
    include?: Prisma.FavoriteSongInclude<ExtArgs> | null;
    where: Prisma.FavoriteSongWhereUniqueInput;
    create: Prisma.XOR<Prisma.FavoriteSongCreateInput, Prisma.FavoriteSongUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FavoriteSongUpdateInput, Prisma.FavoriteSongUncheckedUpdateInput>;
};
export type FavoriteSongDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FavoriteSongSelect<ExtArgs> | null;
    omit?: Prisma.FavoriteSongOmit<ExtArgs> | null;
    include?: Prisma.FavoriteSongInclude<ExtArgs> | null;
    where: Prisma.FavoriteSongWhereUniqueInput;
};
export type FavoriteSongDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FavoriteSongWhereInput;
    limit?: number;
};
export type FavoriteSongDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FavoriteSongSelect<ExtArgs> | null;
    omit?: Prisma.FavoriteSongOmit<ExtArgs> | null;
    include?: Prisma.FavoriteSongInclude<ExtArgs> | null;
};
export {};
