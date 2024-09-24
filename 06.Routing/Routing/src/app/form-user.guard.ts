import { CanDeactivateFn } from "@angular/router";
import { UserEditComponent } from "./user-edit/user-edit.component";

export const formUserGuard: CanDeactivateFn<UserEditComponent> = (component) => {
  if (component.saved){
    return true;
  } else {
    return confirm('Ëtes vous sur de vouloir quitter la page')
  }
}
