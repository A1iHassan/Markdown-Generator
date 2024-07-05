import { useContext, useState, useEffect } from "react";

import { AST } from "../../util/contextProvidor";
import { italic } from "../../constants/markdownElements";

export default function ItalicElement({ initialText = "", ID }) {
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
            const newNode = italic(text);
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
