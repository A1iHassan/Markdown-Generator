import { useContext, useState } from "react";
import { AST } from "../../util/contextProvidor";
import { paragraph } from "../../constants/markdownElements";

export default function ParagraphElement({ initialText = "" }) {
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
            newAst.children.push(paragraph(text));
            setAst(newAst);
            console.log(ast);
          }
        }}
        rows="4"
        cols="50"
      />
      <p>{text}</p>
    </>
  );
}
