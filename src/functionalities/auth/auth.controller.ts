import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(
    @Body() loginDto: any,
  ){
    console.log(loginDto)
    return "Login";
  }

  @Post('register')
  register(
    @Body() registerDto: any,
  ){
    console.log(registerDto);
    return "Register";
  }

}
