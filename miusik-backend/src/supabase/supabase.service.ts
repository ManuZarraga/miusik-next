/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor(private config: ConfigService) {
    this.supabase = createClient(
      this.config.get<string>('SUPABASE_URL')!,
      this.config.get<string>('SUPABASE_SERVICE_KEY')!,
    );
  }

  // Para Auth
  async getUserFromToken(token: string) {
    const {
      data: { user },
      error,
    } = await this.supabase.auth.getUser(token);
    if (error) throw error;
    return user;
  }

  // Para Storage
  getStorageClient() {
    return this.supabase.storage;
  }

  async uploadFile(bucket: string, path: string, file: Buffer) {
    const { data, error } = await this.supabase.storage
      .from(bucket)
      .upload(path, file);

    if (error) throw error;
    return data;
  }

  getPublicUrl(bucket: string, path: string) {
    const {
      data: { publicUrl },
    } = this.supabase.storage.from(bucket).getPublicUrl(path);
    return publicUrl;
  }
}
