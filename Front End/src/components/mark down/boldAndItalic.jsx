import { useContext, useState } from "react";
import { AST } from "../../util/contextProvidor";
import { boldAndItalic } from "../../constants/markdownElements";

export default function BoldAndItalicElement({ initialText = "" }) {
  const [text, setText] = useState(initialText);
  const { ast, setAst } = useContext(AST);

  return (
    <>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Shift") {
            const newAst = { ...ast };
            newAst.children.push(boldAndItalic(text));
            setAst(newAst);
            console.log(ast);
          }
        }}
        placeholder="Enter bold and italic text"
        rows="2"
        cols="20"
      />
      <pre>
        <strong>
          <em>{text}</em>
        </strong>
      </pre>
    </>
  );
}
