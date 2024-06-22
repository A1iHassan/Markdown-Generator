import Paragraph from "../components/paragraph";
import Heading from "../components/headingInput";

export function mapElement(arr, dispatch) {
  console.log(arr);
  arr.map((item) => (
    <div className={item.split(" ")[0]} key={item}>
      {console.log(item.split(" ")[0] === "Heading")}
      {item.split(" ")[0] === "Heading" ? (
        <Heading />
      ) : item.split(" ")[0] === "Paragraph" ? (
        <Paragraph />
      ) : (
        ""
      )}
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
