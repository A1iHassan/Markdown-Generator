import { AST } from "../util/contextProvidor";
import { useContext, useEffect } from "react";
import { remark } from "remark";
import stringify from "remark-stringify";

export default function MarkdownPage() {
  const { ast, setAst } = useContext(AST);
  useEffect(() => {
    setAst(ast);
  }, [ast]);
  const output = remark().use(stringify).stringify(ast);
  return (
    <div className="output-page">
      <h2>Markdown Page</h2>
      <pre>{output}</pre>
    </div>
  );
}
