import { useContext, useState } from "react";
import { AST } from "../../util/contextProvidor";
import { blockquote } from "../../constants/markdownElements";
import "../../App.css";

export default function BlockquoteElement({ initialText = "" }) {
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
            newAst.children.push(blockquote(text));
            setAst(newAst);
            console.log(ast);
          }
        }}
        placeholder="Enter blockquote text"
        rows="4"
        cols="50"
      />

      <pre>
        <blockquote>{text}</blockquote>
      </pre>
    </>
  );
}
