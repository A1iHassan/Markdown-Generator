import { v4 } from "uuid";

export default function ElementsNav({ dispatch }) {
  const elements = [
    "heading",
    "paragraph",
    "bold",
    "italic",
    "BoldAndItalic",
    "blockquote",
    "orderedList",
    "unOrderedList",
    "codeBlock",
    "inlineCode",
    "horizontalRule",
    "link",
  ];

  return (
    <div>
      {elements.map((element, index) => (
        <button
          key={index}
          onClick={() => {
            dispatch(`add ${element} ${v4()}`);
          }}
        >
          {element}
        </button>
      ))}
    </div>
  );
}
