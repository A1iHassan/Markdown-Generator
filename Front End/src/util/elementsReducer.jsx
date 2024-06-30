export function elementsReducer(state, action) {
  if (action.includes("add")) {
    const [add, element, id] = action.split(" ");
    const newState = [...state, `${element} ${id}`];
    return newState;
  }
  throw Error(`unknown action ${action}`);
}
