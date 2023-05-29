import { initialState } from "./initialState";

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET-DATA":
      const stateCopy = { ...state };
      stateCopy.simpsons = action.data;
      console.log("DAta set");
      return stateCopy;

    case "LIKE-TOGGLE": {
      const stateCopy = { ...state };
      const indexOf = stateCopy.simpsons.findIndex((char) => {
        return char.id === action.id;
      });
      stateCopy.simpsons[indexOf].liked = !stateCopy.simpsons[indexOf].liked;

      return stateCopy;
    }
    case "ONSORT": {
      const stateCopy = { ...state };
      if (action.event.target.id === "sort-by") {
        stateCopy.sortBy = action.event.target.value;
      } else if (action.event.target.id === "sort-direction") {
        stateCopy.sortDirection = action.event.target.value;
      }

      return stateCopy;
    }
    case "ONSEARCH": {
      const stateCopy = { ...state };
      stateCopy.searchInput = action.event.target.value;

      return stateCopy;
    }

    case "RESET": {
      const stateCopy = { ...state };
      stateCopy.sortDirection = initialState.sortDirection;
      stateCopy.sortBy = initialState.sortBy;
      stateCopy.searchInput = initialState.searchInput;

      return stateCopy;
    }
    case "DELETE": {
      const stateCopy = { ...state };
      stateCopy.sortDirection = initialState.sortDirection;
      stateCopy.sortBy = initialState.sortBy;
      stateCopy.searchInput = "";

      return stateCopy;
    }

    default:
      return initialState;
  }
}
