import { mapElement } from "../utils/mapper";

export default function Page({ elements, dispatch }) {
  return <>{mapElement(elements, dispatch)}</>;
}
