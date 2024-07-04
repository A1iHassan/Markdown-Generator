import { useContext, useState } from "react";
import { AST } from "../../util/contextProvidor";
import { inlineCode } from "../../constants/markdownElements";

export default function InlineCodeElement({ initialCode = "" }) {
  const [code, setCode] = useState(initialCode);
  const { ast, setAst } = useContext(AST);

  return (
    <>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Shift") {
            const newAst = { ...ast };
            newAst.children.push(inlineCode(text));
            setAst(newAst);
            console.log(ast);
          }
        }}
        placeholder="Enter inline code"
      />
      <code>{code}</code>
    </>
  );
}
