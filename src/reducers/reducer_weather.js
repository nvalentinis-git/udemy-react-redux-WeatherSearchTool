import FETCH_WEATHER from '../actions/index';

export default function(state = [], action) {

  switch (action.type) {

    case FETCH_WEATHER: {

      // This needs to hold a list of cities
      // We should return a new instance of state,
      //    we should NOT change/mutate the state object
      // concat method do not mutate the original object
      //    it create a new object
      // return [ action.payload.data, ...state ] -> ES6
      return state.concat( [ action.payload.data ] );
    }
  }

  return state;
}
