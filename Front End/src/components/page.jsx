import TextInput from "./textInput";
import HeadingInput from "./headingInput";

export default function Page({ elements, dispatch }) {
  return (
    <>
      <div className="texts">
        {elements.texts.map((item) => (
          <div className="texts" key={item}>
            <TextInput />
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
      <div className="headings">
        {elements.headings.map((item) => (
          <div className="headings" key={item}>
            <HeadingInput />
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
