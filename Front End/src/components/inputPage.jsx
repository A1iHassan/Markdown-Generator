import { useReducer } from "react";
import ElementsNav from "./elementsNav";
import { elementsReducer } from "../util/elementsReducer";
import { mapElements } from "../util/elementsMapper";

export default function InputPage() {
  const [state, dispatch] = useReducer(elementsReducer, []);
  console.log(state);
  return (
    <>
      <ElementsNav dispatch={dispatch} />
      {mapElements(state)}
    </>
  );
}
