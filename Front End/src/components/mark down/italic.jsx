import { useContext, useState } from "react";
import { AST } from "../../util/contextProvidor";
import { italic } from "../../constants/markdownElements";

export default function ItalicElement({ initialText = "" }) {
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
            newAst.children.push(italic(text));
            setAst(newAst);
            console.log(ast);
          }
        }}
        placeholder="Enter italic text"
        rows="2"
        cols="20"
      />
      <pre>
        <em>{text}</em>
      </pre>
    </>
  );
}
