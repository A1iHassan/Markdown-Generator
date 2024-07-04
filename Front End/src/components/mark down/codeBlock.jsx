import { useContext, useState } from "react";
import { AST } from "../../util/contextProvidor";
import { codeBlock } from "../../constants/markdownElements";

export default function CodeBlockElement({
  initialCode = "",
  initialLanguage = "javascript",
}) {
  const [code, setCode] = useState(initialCode);
  const [lang, setLang] = useState(initialLanguage);
  const { ast, setAst } = useContext(AST);

  return (
    <>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Shift") {
            const newAst = { ...ast };
            newAst.children.push(codeBlock(code, lang));
            setAst(newAst);
            console.log(ast);
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
