import { horizontalRule } from "../../constants/markdownElements";
import { useContext, useEffect } from "react";
import { AST } from "../../util/contextProvidor";

export default function HorizontalRuleElement({ ID }) {
  const { ast, setAst } = useContext(AST);
  useEffect(() => {
    const newAst = { ...ast };
    const newNode = horizontalRule();
    newNode.id = ID;
    newAst.children.push(newNode);
    setAst(newAst);
  }, []);
  return <hr />;
}
