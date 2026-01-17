import {
  Controller,
  Post,
  Body,
  Get,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto, SignInDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }

  @Post('signin')
  async signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @Post('signout')
  async signOut(@Headers('authorization') authHeader: string) {
    if (!authHeader) {
      throw new UnauthorizedException('No token provided');
    }
    const token = authHeader.replace('Bearer ', '');
    return this.authService.signOut(token);
  }

  @Post('refresh')
  async refreshToken(@Body('refresh_token') refreshToken: string) {
    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token required');
    }
    return this.authService.refreshToken(refreshToken);
  }

  @Get('me')
  async getUser(@Headers('authorization') authHeader: string) {
    if (!authHeader) {
      throw new UnauthorizedException('No token provided');
    }
    const token = authHeader.replace('Bearer ', '');
    return this.authService.getUser(token);
  }
}
