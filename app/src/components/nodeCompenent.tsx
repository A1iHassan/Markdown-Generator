import { Root } from "mdast";
import { renderContent } from "../utils/renderContent";

interface NodeType {
  ast: Root;
}

const NodeCmpt = ({ ast }: NodeType) => {
  return ast.children.map(renderContent);
};

export default NodeCmpt;
