import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import { AnyAction } from 'redux';

import example, { ExampleState } from './slices/example';

export interface StoreState {
  server: Record<string, unknown>;
  client: {
    exampleState: ExampleState;
  };
}

const initialState: StoreState = {
  server: {},
  client: {
    exampleState: {
      booleanKey: false,
      stringKey: ''
    }
  }
};

function hydrate(state: StoreState = initialState, action: AnyAction): StoreState {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        server: {
          ...state.server,
          ...action.payload.server
        }
      };
    default:
      return state;
  }
}

const serverSideReducers = combineReducers({ hydrate: hydrate });
const clientSideReducers = combineReducers({
  exampleState: example
});

export const reducers = combineReducers({
  server: serverSideReducers,
  client: clientSideReducers
});
