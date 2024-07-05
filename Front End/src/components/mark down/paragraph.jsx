import { useContext, useState, useEffect } from "react";

import { AST } from "../../util/contextProvidor";
import { paragraph } from "../../constants/markdownElements";

export default function ParagraphElement({ initialText = "", ID }) {
  const [text, setText] = useState(initialText);
  const { ast, setAst } = useContext(AST);
  const [id, setId] = useState();
  useEffect(() => {
    setId(ID);
  }, []);

  return (
    <>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.altKey && e.key === "Enter") {
            const newNode = paragraph(text);
            newNode["id"] = id;
            const ids = ast.children.map((item) => item.id);
            const newAst = { ...ast };
            if (ids.includes(id)) {
              newAst.children[ids.indexOf(id)] = newNode;
              setAst(newAst);
            } else {
              newAst.children.push(newNode);
              setAst(newAst);
            }
          }
        }}
        rows="4"
        cols="50"
      />
      <p>{text}</p>
    </>
  );
}
