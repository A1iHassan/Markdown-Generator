import { v4 } from "uuid";

export function elementsReducer(state, action) {
  if (action.includes("add")) {
    if (action.includes("Paragraph")) {
      const newElement = v4();
      return {
        headings: state.headings,
        texts: [...state.texts, `Paragraph ${newElement}`],
      };
    }
    if (action.includes("Heading")) {
      const newElement = v4();
      return {
        headings: [...state.headings, `Heading ${newElement}`],
        texts: state.texts,
      };
    }
  }
  if (action.includes("delete")) {
    if (action.includes("Paragraph")) {
      const id = action.split(" ")[2];
      return {
        headings: state.headings,
        texts: state.texts.filter((item) => !item.includes(id)),
      };
    }
    if (action.includes("Heading")) {
      const id = action.split(" ")[2];
      return {
        headings: state.headings.filter((item) => !item.includes(id)),
        texts: state.texts,
      };
    }
  }
  throw Error("unknown action");
}
