import Paragraph from "../components/paragraph";
import Heading from "../components/headingInput";

const components = { Paragraph: <Paragraph />, Heading: <Heading /> };

export function mapElement(arr, dispatch) {
  return arr.map((item) => (
    <div key={item.split(" ")[1]}>
      {Object.keys(components).map((key) => {
        if (item.includes(key)) {
          return <div key={key}>{components[key]}</div>;
        }
        return null;
      })}
      <button
        onClick={() => {
          dispatch(`delete ${item}`);
        }}
      >
        delete
      </button>
    </div>
  ));
}
