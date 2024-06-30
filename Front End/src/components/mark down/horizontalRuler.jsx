import { horizontalRule } from "../../constants/markdownElements";
import { useContext, useEffect } from "react";
import { AST } from "../../util/contextProvidor";

export default function HorizontalRuleElement() {
  const { ast, setAst } = useContext(AST);
  useEffect(() => {
    const newAst = { ...ast };
    newAst.children.push(horizontalRule());
    setAst(newAst);
  }, []);
  return <hr />;
}
