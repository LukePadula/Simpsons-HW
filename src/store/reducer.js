import { initialState } from "./initialState";
import {
  SETDATA,
  LIKETOGGLE,
  ONSORT,
  ONSEARCH,
  RESET,
  ONDELETE,
} from "./types";

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SETDATA:
      const stateCopy = { ...state };
      stateCopy.simpsons = action.data;
      return stateCopy;

    case LIKETOGGLE: {
      const simpsons = [...state.simpsons];
      const indexOf = simpsons.findIndex((char) => {
        return char.id === action.id;
      });
      simpsons[indexOf].liked = !simpsons[indexOf].liked;

      return { ...state, simpsons };
    }
    case ONSORT: {
      const stateCopy = { ...state };
      stateCopy[action.event.target.id] = action.event.target.value;
      stateCopy.resetDisabled = false;

      return stateCopy;
    }
    case ONSEARCH: {
      let { searchInput, resetDisabled } = state;
      searchInput = action.value;
      resetDisabled = false;

      return { ...state, searchInput, resetDisabled };
    }

    case RESET: {
      let { sortDirection, sortBy, searchInput, resetDisabled } = state;
      sortDirection = initialState.sortDirection;
      sortBy = initialState.sortBy;
      searchInput = initialState.searchInput;
      resetDisabled = true;

      return { ...state, sortDirection, sortBy, searchInput, resetDisabled };
    }
    case ONDELETE: {
      const simpsons = [...state.simpsons];
      const indexOf = simpsons.findIndex((char) => {
        return char.id === action.id;
      });
      simpsons.splice(indexOf, 1);

      return { ...state, simpsons };
    }

    default:
      return initialState;
  }
}
