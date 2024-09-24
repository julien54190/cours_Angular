import { ResolveFn } from "@angular/router";
import { of } from "rxjs";
import { AuthService } from "./auth.service";
import { inject } from "@angular/core";

export interface User {
  id: string;
  name: string;
}


export const userResolver: ResolveFn<User> = (activatedRoute) => {
  const userId: any = activatedRoute.paramMap.get('id');
  console.log(userId);

  const authService = inject(AuthService);
  // return of({
  //   id: '6',
  //   name: 'Milou'
  //})
  return authService.getUser(userId);
}
