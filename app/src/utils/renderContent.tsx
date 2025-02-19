import { Content } from "mdast";
import { renderPhrasingContent } from "./renderPhrasingContent";
import { createElement, ReactNode } from "react";

export const renderContent = (node: Content): ReactNode => {
  switch (node.type) {
    case "heading":
      const headingSizes = {
        1: "text-4xl",
        2: "text-3xl",
        3: "text-2xl",
        4: "text-xl",
        5: "text-lg",
        6: "text-md",
      };
      return createElement(
        `h${node.depth}`,
        {
          key: Math.random(),
          className: `${headingSizes[node.depth]}`,
        },
        ...node.children.map(renderPhrasingContent)
      );

    case "paragraph":
      return createElement(
        "p",
        {
          key: Math.random(),
          className: `${node.children.map((child) =>
            child.type === "inlineCode" ? "" : "text-lg"
          )}`,
        },
        ...node.children.map(renderPhrasingContent)
      );

    case "list":
      return createElement(
        node.ordered ? "ol" : "ul",
        {
          key: Math.random(),
          className: `ml-11 mt-2 ${
            node.ordered ? "list-decimal" : "list-disc"
          }`,
        },
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
        {
          key: Math.random(),
          className:
            "border-l-4 border-gray-400 pl-4 italic text-gray-600 bg-gray-200 py-2 my-3 rounded",
        },
        ...node.children.map(renderContent)
      );

    case "code":
      return createElement(
        "pre",
        { key: Math.random() },
        createElement("code", {}, node.value)
      );

    case "thematicBreak":
      return createElement("hr", { key: Math.random(), className: "m-2" });

    case "table":
      return createElement(
        "table",
        {
          key: Math.random(),
          className: "border border-gray-300 border-collapse w-full my-4",
        },
        createElement("tbody", {}, ...node.children.map(renderContent))
      );

    case "tableRow":
      return createElement(
        "tr",
        {
          key: Math.random(),
          className: "border-b border-gray-300",
        },
        ...node.children.map(renderContent)
      );

    case "tableCell":
      return createElement(
        "td",
        {
          key: Math.random(),
          className:
            "px-4 py-2 border-r border-gray-300 last:border-r-0 text-left",
        },
        ...node.children.map(renderPhrasingContent)
      );

    default:
      console.warn("Unhandled content:", node.type);
      return null;
  }
};
