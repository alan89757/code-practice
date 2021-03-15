
const TEMP_CHANGE = 'tempChange';
// reducer
export function tempChange(state="", action) {
  switch (action.type) {
    case TEMP_CHANGE:
      return action.data;
    default:
      return state;
  }
}

// action
export function tempChangeCreator(data) {
  return {
    type: TEMP_CHANGE,
    data
  }
}
