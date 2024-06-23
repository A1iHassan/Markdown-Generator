import { v4 } from "uuid";

export function elementsReducer(state, action) {
  if (action.includes("add")) {
    if (action.includes("Paragraph")) {
      const newElement = v4();
      return [...state, `Paragraph ${newElement}`];
    }
    if (action.includes("Heading")) {
      const newElement = v4();
      return [...state, `Heading ${newElement}`];
    }
  }
  if (action.includes("delete")) {
    const id = action.split(" ")[2];
    return state.filter((item) => !item.includes(id));
  }
  throw Error("unknown action");
}
