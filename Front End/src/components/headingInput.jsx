import { remark } from "remark";
import stringify from "remark-stringify";
import { useState, useEffect } from "react";

function HeadingInput() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  useEffect(() => {
    const text = "";
    const processor = remark();
    const ast = processor().parse(text);
    delete ast.position;
    delete ast.end;

    ast.children.unshift({
      type: "heading",
      depth: 1,
      children: [
        {
          type: "text",
          value: input,
        },
      ],
    });

    const newOutput = processor().use(stringify).stringify(ast);
    setOutput(newOutput);
  }, [input]);
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="enter a heading"
      />
      <pre>{output}</pre>
    </>
  );
}

export default HeadingInput;
