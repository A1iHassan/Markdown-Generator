import { Root, Content, PhrasingContent } from "mdast";
import { createElement, ReactNode } from "react";

interface NodeType {
  ast: Root;
}

const NodeCmpt = ({ ast }: NodeType) => {
  console.log(ast);

  const renderPhrasingContent = (node: PhrasingContent): ReactNode => {
    switch (node.type) {
      case "text":
        return node.value;
      case "emphasis":
        return createElement(
          "em",
          {},
          ...node.children.map(renderPhrasingContent)
        );
      case "strong":
        return createElement(
          "strong",
          {},
          ...node.children.map(renderPhrasingContent)
        );
      case "inlineCode":
        return createElement("code", {}, node.value);
      case "link":
        return createElement(
          "a",
          { href: node.url },
          ...node.children.map(renderPhrasingContent)
        );
      case "image":
        return createElement("img", { src: node.url, alt: node.alt });
      default:
        console.warn("Unhandled phrasing content:", node.type);
        return null;
    }
  };

  const renderContent = (node: Content): ReactNode => {
    switch (node.type) {
      case "heading":
        return createElement(
          `h${node.depth}`,
          { key: Math.random() },
          ...node.children.map(renderPhrasingContent)
        );

      case "paragraph":
        return createElement(
          "p",
          { key: Math.random() },
          ...node.children.map(renderPhrasingContent)
        );

      case "list":
        return createElement(
          node.ordered ? "ol" : "ul",
          { key: Math.random() },
          ...node.children.map(renderContent)
        );

      case "listItem":
        return createElement(
          "li",
          { key: Math.random() },
          ...node.children.map(renderContent)
        );

      case "blockquote":
        return createElement(
          "blockquote",
          { key: Math.random() },
          ...node.children.map(renderContent)
        );

      case "code":
        return createElement(
          "pre",
          { key: Math.random() },
          createElement("code", {}, node.value)
        );

      case "thematicBreak":
        return createElement("hr", { key: Math.random() });

      case "table":
        return createElement(
          "table",
          { key: Math.random() },
          createElement("tbody", {}, ...node.children.map(renderContent))
        );

      case "tableRow":
        return createElement(
          "tr",
          { key: Math.random() },
          ...node.children.map(renderContent)
        );

      case "tableCell":
        return createElement(
          "td",
          { key: Math.random() },
          ...node.children.map(renderPhrasingContent)
        );

      default:
        console.warn("Unhandled content:", node.type);
        return null;
    }
  };

  return ast.children.map(renderContent);
};

export default NodeCmpt;
