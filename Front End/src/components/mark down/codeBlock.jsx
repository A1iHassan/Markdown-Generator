import { useContext, useState, useEffect } from "react";
import { v4 } from "uuid";

import { AST } from "../../util/contextProvidor";
import { codeBlock } from "../../constants/markdownElements";

export default function CodeBlockElement({
  initialCode = "",
  initialLanguage = "javascript",
  ID,
}) {
  const [code, setCode] = useState(initialCode);
  const [lang, setLang] = useState(initialLanguage);
  const { ast, setAst } = useContext(AST);
  const [id, setId] = useState();
  useEffect(() => {
    setId(ID);
  }, []);

  return (
    <>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        onKeyDown={(e) => {
          if (e.altKey && e.key === "Enter") {
            const newNode = codeBlock(lang, text);
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
        placeholder="Enter code block"
      />
      <input
        type="text"
        placeholder="Enter language, set FIRST !!!"
        onChange={(e) => {
          setLang(e.target.value);
        }}
      />
      <pre>
        <code>{code}</code>
      </pre>
    </>
  );
}
