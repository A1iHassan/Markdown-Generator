import { PhrasingContent } from "mdast";
import { createElement, ReactNode } from "react";
export const renderPhrasingContent = (node: PhrasingContent): ReactNode => {
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
      return createElement("code", { className: "text-md" }, node.value);
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
