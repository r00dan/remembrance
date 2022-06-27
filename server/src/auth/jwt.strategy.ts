import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { PayloadInput } from 'src/presentation/input';
import * as dotenv from 'dotenv';
import { JWT_SECRET } from 'src/constants';

dotenv.config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JWT_SECRET,
    });
  }

  public async validate(payload: PayloadInput) {
    return { userId: payload.userId, username: payload.username };
  }
}
