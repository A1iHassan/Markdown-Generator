import { useContext, useState } from "react";
import { AST } from "../../util/contextProvidor";
import { bold } from "../../constants/markdownElements";

export default function BoldElement({ initialText = "" }) {
  const [text, setText] = useState(initialText);
  const { ast, setAst } = useContext(AST);

  return (
    <>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const newAst = { ...ast };
            newAst.children.push(bold(text));
            setAst(newAst);
            console.log(ast);
          }
        }}
        placeholder="Enter bold text"
        rows="2"
        cols="20"
      />
      <pre>
        <strong>{text}</strong>
      </pre>
    </>
  );
}
