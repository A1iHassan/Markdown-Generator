import { v4 } from "uuid";
import "../style/navElements.scss";
import {
  Link,
  Hr,
  InlineCode,
  CodeBlock,
  Ul,
  Ol,
  BlockQuote,
  Italic,
  Bold,
  Paragraph,
  Heading,
} from "./nav icons/navIcons";

export default function ElementsNav({ dispatch }) {
  const elements = {
    heading: [<Heading />, "Heading"],
    paragraph: [<Paragraph />, "Paragraph"],
    bold: [<Bold />, "Bold"],
    italic: [<Italic />, "Italic"],
    BoldAndItalic: ["", "Bold and Italic"],
    blockquote: [<BlockQuote />, "Block Quote"],
    orderedList: [<Ol />, "Ordered List"],
    unOrderedList: [<Ul />, "Unordered List"],
    codeBlock: [<CodeBlock />, "Code Block"],
    inlineCode: [<InlineCode />, "Inline Code"],
    horizontalRule: [<Hr />, "Horizontal ruler"],
    link: [<Link />, "Link"],
  };

  return (
    <div className="nav-elements">
      {Object.keys(elements).map((element, index) => (
        <div key={`exp ${index}`}>
          <button
            key={index}
            onClick={() => {
              dispatch(`add ${element} ${v4()}`);
            }}
          >
            {elements[element][0]}
          </button>
          <span className="exp">{elements[element][1]}</span>
        </div>
      ))}
    </div>
  );
}
