import { useReducer } from "react";
import Page from "./page";
import NavBar from "./navBar";
import { elementsReducer } from "../utils/reducer";

export default function Sheet() {
  const [state, dispatch] = useReducer(elementsReducer, {
    headings: [],
    texts: [],
  });
  return (
    <>
      <NavBar dispatch={dispatch} />
      <Page elements={state} dispatch={dispatch} />
    </>
  );
}
