import { AstNode } from "./vite-env";

interface NodeCmptProps {
  ast: AstNode;
}

const NodeCmpt: React.FC<NodeCmptProps> = ({ ast }) => {
  console.log(ast);
  return <div>NodeCmpt</div>;
};

export default NodeCmpt;
