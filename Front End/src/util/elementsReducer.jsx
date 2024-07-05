export function elementsReducer(state, action) {
  if (action.includes("add")) {
    const [add, element, id] = action.split(" ");
    const newState = [...state, `${element} ${id}`];
    return newState;
  }
  if (action.includes("delete")) {
    const [add, element, id] = action.split(" ");
    const newState = state.filter((item) => !item.includes(id));
    return newState;
  }
  throw Error(`unknown action ${action}`);
}
