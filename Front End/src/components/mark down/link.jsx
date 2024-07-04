import { useContext, useState } from "react";
import { AST } from "../../util/contextProvidor";
import { link } from "../../constants/markdownElements";

export default function LinkElement({ initialUrl = "", initialText = "" }) {
  const [url, setUrl] = useState(initialUrl);
  const [text, setText] = useState(initialText);
  const { ast, setAst } = useContext(AST);

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
          if (e.key === "Shift") {
            const newAst = { ...ast };
            newAst.children.push(link(url, text));
            setAst(newAst);
            console.log(ast);
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
