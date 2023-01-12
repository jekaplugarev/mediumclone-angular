import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap} from "rxjs";
import {CurrentUserInterface} from "../../../shared/types/currentUser.interface";
import {AuthService} from "../../services/auth.service";
import {PersistenceService} from "../../../shared/service/persistence.service";
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction
} from "../actions/getCurrentUser.action";

@Injectable()
export class GetCurrentUserEffect {
  getCurrentUser$ = createEffect(() => this.actions$.pipe(
    ofType(getCurrentUserAction),
    switchMap(() => {
      const token = this.persistenceService.get('accessToken')

      if (!token) {
        return of(getCurrentUserAction())
      }

      return this.authService.getCurrentUser().pipe(
        map((currentUser: CurrentUserInterface) => {
          return getCurrentUserSuccessAction({currentUser})
        }),
        catchError(() => {
          return of(getCurrentUserFailureAction())
        })
      )
    })
  ))

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService,
  ) {
  }
}
