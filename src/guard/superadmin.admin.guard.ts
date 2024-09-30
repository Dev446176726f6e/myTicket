import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException({
        message: "Token not found (in header)",
      });
    }

    const [bearer, token] = authHeader.split(" ");
    if (bearer !== "Bearer" || !token) {
      throw new UnauthorizedException({
        message: "Bearer token is malformed or missing",
      });
    }

    let payload: any;
    try {
      payload = this.jwtService.verify(token);
    } catch (error) {
      throw new UnauthorizedException({
        message: "Token failed verification",
        error,
      });
    }

    if (
      (payload.is_creator === true || payload.is_creator === false) &&
      payload.is_active === true
    ) {
      return true;
    }

    throw new UnauthorizedException({ message: "Access denied. Admins only." });
  }
}

// if (!payload.is_active || payload.is_active !== true) {
//   throw new UnauthorizedException({
//     message: "Access denied. Inactive accounts cannot access this resource.",
//   });
// }
