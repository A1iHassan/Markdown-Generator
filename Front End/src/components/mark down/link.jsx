import { useContext, useState, useEffect } from "react";

import { AST } from "../../util/contextProvidor";
import { link } from "../../constants/markdownElements";

export default function LinkElement({ initialUrl = "", initialText = "", ID }) {
  const [url, setUrl] = useState(initialUrl);
  const [text, setText] = useState(initialText);
  const { ast, setAst } = useContext(AST);
  const [id, setId] = useState();
  useEffect(() => {
    setId(ID);
  }, []);

  return (
    <>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
      />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.altKey && e.key === "Enter") {
            const newNode = link(url, text);
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
        placeholder="Enter link text"
      />
      <p>
        <a href={url}>{text}</a>
      </p>
    </>
  );
}
