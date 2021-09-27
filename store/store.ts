import { Action, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { ActionCreator, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { reducers, StoreState } from './reducers';

const store = configureStore({
  reducer: reducers,
  devTools: true
});

const makeStore = () => store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export type ExtraArgument = Record<string, unknown>;
// eslint-disable-next-line
export type ThunkCreator<R = Promise<any>> = ActionCreator<ThunkAction<R, StoreState, ExtraArgument, AnyAction>>;

// export an assembled wrapper
// this wrapper will be used to every page's component, for injecting the store and actions into it.
// const wrapper = createWrapper<Store<StoreState>>(makeStore, { debug: false });

// export default wrapper;

export const wrapper = createWrapper<AppStore>(makeStore);
