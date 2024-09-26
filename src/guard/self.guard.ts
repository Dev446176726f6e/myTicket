// import {
//   CanActivate,
//   ExecutionContext,
//   ForbiddenException,
//   Injectable,
//   UnauthorizedException,
// } from "@nestjs/common";
// import { JwtService } from "@nestjs/jwt";
// import { Observable } from "rxjs";

// @Injectable()
// export class SelfGuard implements CanActivate {
//   canActivate(
//     context: ExecutionContext
//   ): boolean | Promise<boolean> | Observable<boolean> {
//     const req = context.switchToHttp().getRequest();

//     if(String(req.user.sub) !== req.params.id) {
//       throw new ForbiddenException({
//         message: "Have no access"
//       })
//     }
    
//     return true;
//   }
// }
