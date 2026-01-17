import { ConfigService } from '@nestjs/config';
export declare class SupabaseService {
    private config;
    private supabase;
    constructor(config: ConfigService);
    getUserFromToken(token: string): Promise<import("@supabase/supabase-js").AuthUser | null>;
    getStorageClient(): import("@supabase/storage-js").StorageClient;
    uploadFile(bucket: string, path: string, file: Buffer): Promise<{
        id: string;
        path: string;
        fullPath: string;
    }>;
    getPublicUrl(bucket: string, path: string): string;
}
