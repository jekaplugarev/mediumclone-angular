import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AuthStateInterface} from "../types/authState.interface";

export const authFeatureSelector = createFeatureSelector<AuthStateInterface>("auth")

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  authState => authState.isSubmitting
)

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  authState => authState.validationErrors
)

