import { CanActivate, ExecutionContext } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
export declare class AuthGuard implements CanActivate {
    private supabase;
    constructor(supabase: SupabaseService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
