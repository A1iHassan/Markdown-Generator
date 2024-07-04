import { useContext, useState } from "react";
import { AST } from "../../util/contextProvidor";
import { heading } from "../../constants/markdownElements";

export default function HeadingElement({ initialLevel = 1, initialText = "" }) {
  const [text, setText] = useState(initialText);
  const [level, setLevel] = useState(initialLevel);
  const { ast, setAst } = useContext(AST);

  return (
    <>
      <select
        value={level}
        onChange={(e) => {
          setLevel(Number(e.target.value));
        }}
      >
        <option value="1">H1</option>
        <option value="2">H2</option>
        <option value="3">H3</option>
        <option value="4">H4</option>
        <option value="5">H5</option>
        <option value="6">H6</option>
      </select>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Shift") {
            const newAst = { ...ast };
            newAst.children.push(heading(level, text));
            setAst(newAst);
            console.log(ast);
          }
        }}
      />
      <p>{text}</p>
    </>
  );
}
