const INITIAL_STATE = {
  //TODO check if there is any performace gain in splitting up the state object into individual components.
  amform: {
    fromToFocus: 0,
    travelType: 1,
    inpOptLen: 15,
    airDb: null,
    airports: null,
  },
};

const amformReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_AMFORM_STATE":
      return {
        ...state,
        amform: action.payload,
      };
    default:
      return state;
  }
};

export default amformReducer;
