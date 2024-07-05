import { useContext, useState, useEffect } from "react";

import { AST } from "../../util/contextProvidor";
import { inlineCode } from "../../constants/markdownElements";

export default function InlineCodeElement({ initialCode = "", ID }) {
  const [code, setCode] = useState(initialCode);
  const { ast, setAst } = useContext(AST);
  const [id, setId] = useState();
  useEffect(() => {
    setId(ID);
  }, []);

  return (
    <>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        onKeyDown={(e) => {
          if (e.altKey && e.key === "Enter") {
            const newNode = inlineCode(text);
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
        placeholder="Enter inline code"
      />
      <code>{code}</code>
    </>
  );
}
