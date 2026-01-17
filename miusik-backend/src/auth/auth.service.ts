import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { SignUpDto, SignInDto } from './auth.dto';

@Injectable()
export class AuthService {
  private supabase: SupabaseClient;

  constructor(private config: ConfigService) {
    const supabaseUrl = this.config.get<string>('SUPABASE_URL')!;
    const supabaseAnonKey = this.config.get<string>('SUPABASE_KEY')!;
    this.supabase = createClient(supabaseUrl, supabaseAnonKey);
  }

  async signUp(signUpDto: SignUpDto) {
    const { data, error } = await this.supabase.auth.signUp({
      email: signUpDto.email,
      password: signUpDto.password,
      options: {
        data: {
          name: signUpDto.name,
        },
      },
    });

    if (error) {
      throw new UnauthorizedException(error.message);
    }

    return {
      user: data.user,
      session: data.session,
      access_token: data.session?.access_token,
      refresh_token: data.session?.refresh_token,
    };
  }

  async signIn(signInDto: SignInDto) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email: signInDto.email,
      password: signInDto.password,
    });

    if (error) {
      throw new UnauthorizedException(error.message);
    }

    return {
      user: data.user,
      session: data.session,
      access_token: data.session.access_token,
      refresh_token: data.session.refresh_token,
    };
  }

  async signOut(token: string) {
    const supabaseWithAuth = createClient(
      this.config.get<string>('SUPABASE_URL')!,
      this.config.get<string>('SUPABASE_ANON_KEY')!,
      {
        global: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      },
    );

    const { error } = await supabaseWithAuth.auth.signOut();

    if (error) {
      throw new UnauthorizedException(error.message);
    }

    return { message: 'Signed out successfully' };
  }

  async refreshToken(refreshToken: string) {
    const { data, error } = await this.supabase.auth.refreshSession({
      refresh_token: refreshToken,
    });

    if (error) {
      throw new UnauthorizedException(error.message);
    }

    return {
      user: data.user,
      session: data.session,
      access_token: data.session?.access_token,
      refresh_token: data.session?.refresh_token,
    };
  }

  async getUser(token: string) {
    const supabaseWithAuth = createClient(
      this.config.get<string>('SUPABASE_URL')!,
      this.config.get<string>('SUPABASE_ANON_KEY')!,
      {
        global: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      },
    );

    const {
      data: { user },
      error,
    } = await supabaseWithAuth.auth.getUser();

    if (error) {
      throw new UnauthorizedException(error.message);
    }

    return { user };
  }
}
