import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class SuperAdminGuard implements CanActivate {
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

    const bearer = authHeader.split(" ")[0];
    const token = authHeader.split(" ")[1];

    if (bearer !== "Bearer" || !token) {
      throw new UnauthorizedException({
        message: "Bearer token is not found or malformed",
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

    // Check if the payload contains the is_creator field and if it's true
    if (!payload.is_creator || payload.is_creator !== true) {
      throw new ForbiddenException({
        message: "Access denied. Only creators are allowed.",
      });
    }

    if (!payload.is_active || payload.is_active !== true) {
      throw new ForbiddenException({
        message:
          "Access denied. Inactive accounts cannot access this resource.",
      });
    }

    return true;
  }
}
