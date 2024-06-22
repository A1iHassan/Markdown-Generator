import Paragraph from "./paragraph";
import Heading from "./headingInput";

export default function Page({ elements, dispatch }) {
  return (
    <>
      <div className="texts">
        {elements.texts.map((item) => (
          <div className="Paragraph" key={item}>
            <Paragraph />
            <button
              onClick={() => {
                dispatch(`delete ${item}`);
              }}
            >
              delete
            </button>
          </div>
        ))}
      </div>
      <div className="Heading">
        {elements.headings.map((item) => (
          <div className="Heading" key={item}>
            <Heading />
            <button
              onClick={() => {
                dispatch(`delete ${item}`);
              }}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
