// Define AST nodes for each markdown element with an ID

export const heading = (depth, text) => ({
  type: "heading",
  depth,
  children: [{ type: "text", value: text }],
});

export const paragraph = (text) => ({
  type: "paragraph",
  children: [{ type: "text", value: text }],
});

export const bold = (text) => ({
  type: "strong",
  children: [{ type: "text", value: text }],
});

export const italic = (text) => ({
  type: "emphasis",
  children: [{ type: "text", value: text }],
});

export const boldAndItalic = (text) => ({
  type: "strong",
  children: [
    {
      type: "emphasis",
      children: [{ type: "text", value: text }],
    },
  ],
});

export const blockquote = (text) => ({
  type: "blockquote",
  children: [paragraph(text)],
});

export const orderedList = (items) => ({
  type: "list",
  ordered: true,
  children: items.map((item) => ({
    type: "listItem",
    children: [paragraph(item)],
  })),
});

export const unorderedList = (items) => ({
  type: "list",
  ordered: false,
  children: items.map((item) => ({
    type: "listItem",
    children: [paragraph(item)],
  })),
});

export const codeBlock = (code, lang = "") => ({
  type: "code",
  lang,
  value: code,
});

export const inlineCode = (code) => ({
  type: "inlineCode",
  value: code,
});

export const horizontalRule = () => ({
  type: "thematicBreak",
});

export const link = (url, text) => ({
  type: "link",
  url,
  children: [{ type: "text", value: text }],
});
