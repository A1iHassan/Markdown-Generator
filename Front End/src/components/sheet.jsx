import { useReducer } from "react";
import { v4 } from "uuid";
import Page from "./page";

function elementsReducer(state, action) {
  if (action.includes("add")) {
    if (action.includes("text")) {
      const newElement = v4();
      return {
        headings: state.headings,
        texts: [...state.texts, `text ${newElement}`],
      };
    }
    if (action.includes("heading")) {
      const newElement = v4();
      return {
        headings: [...state.headings, `heading ${newElement}`],
        texts: state.texts,
      };
    }
  }
  if (action.includes("delete")) {
    if (action.includes("text")) {
      const id = action.split(" ")[2];
      return {
        headings: state.headings,
        texts: state.texts.filter((item) => !item.includes(id)),
      };
    }
    if (action.includes("heading")) {
      const id = action.split(" ")[2];
      return {
        headings: state.headings.filter((item) => !item.includes(id)),
        texts: state.texts,
      };
    }
  }
  throw Error("unknown action");
}

export default function Sheet() {
  const [state, dispatch] = useReducer(elementsReducer, {
    headings: [],
    texts: [],
  });
  return (
    <>
      <button
        onClick={() => {
          dispatch("add text");
        }}
      >
        add text
      </button>
      <button
        onClick={() => {
          dispatch("add heading");
        }}
      >
        add heading
      </button>
      <Page elements={state} dispatch={dispatch} />
    </>
  );
}
