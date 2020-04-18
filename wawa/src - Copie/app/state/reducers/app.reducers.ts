import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { AppState } from '../app.state';
import { environment } from '../../../environments/environment';
import { routerReducer } from '@ngrx/router-store';

export const APP_REDUCERS: ActionReducerMap<AppState> = {
  // auth: authReducer
  router: routerReducer
};

export const APP_META_REDUCERS: MetaReducer<AppState>[] =  
  !environment.production
    ? [storeFreeze]
    : [];



