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

      <section className="input-elements">
        <h2>Input Page</h2>
        {mapElements(state)}
      </section>
    </>
  );
}
