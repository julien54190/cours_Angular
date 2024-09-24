// export function authGuard(){
//   return true
// }

import { inject } from "@angular/core";
import { CanActivateChildFn, Router } from "@angular/router";
import { AuthService } from "./auth.service";

// export const authGuard: CanActivateChildFn = (touter, state)=>{
//   return true
// }

export const authGuard: CanActivateChildFn = (activeRouter, state)=>{
  const authService = inject(AuthService);
  return authService.isLoggedin();
}
