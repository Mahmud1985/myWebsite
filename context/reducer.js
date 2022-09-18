export const actionType = {
  SET_TOGGLE: "SET_TOGGLE",
};

const reducer = (state, action) => {
  switch (actionType.SET_TOGGLE) {
    case "SET_TOGGLE":
      return {
        ...state,
        darkMode: action.darkMode,
      };
    default:
      return state;
  }
};

export default reducer;
