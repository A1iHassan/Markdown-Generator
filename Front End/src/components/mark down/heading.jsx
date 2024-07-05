import { useContext, useState, useEffect } from "react";

import { AST } from "../../util/contextProvidor";
import { heading } from "../../constants/markdownElements";

export default function HeadingElement({
  initialLevel = 1,
  initialText = "",
  ID,
}) {
  const [text, setText] = useState(initialText);
  const [level, setLevel] = useState(initialLevel);
  const { ast, setAst } = useContext(AST);

  const [id, setId] = useState();
  useEffect(() => {
    setId(ID);
  }, []);
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
          if (e.altKey && e.key === "Enter") {
            const newNode = heading(level, text);
            newNode["id"] = id;
            const ids = ast.children.map((item) => item.id);
            const newAst = { ...ast };
            if (ids.includes(id)) {
              newAst.children[ids.indexOf(id)] = newNode;
              setAst(newAst);
            } else {
              newAst.children.push(newNode);
              setAst(newAst);
            }
          }
        }}
      />
      <p>{text}</p>
    </>
  );
}
