import { ChangeEvent, KeyboardEvent, useState, useRef } from "react";
import { remark } from "remark";
import NodeCmpt from "./nodeCompenent";
import { Root } from "mdast";

function App() {
  const [markdown, setMarkdown] = useState("");
  const timeRef = useRef<number | null>(null);

  const ast: Root = remark.parse(markdown);
  // this function is here for debugging purposes
  const show = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.shiftKey && e.key == "Enter") {
      e.preventDefault();
      console.log(remark().parse(markdown));
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (timeRef.current) clearTimeout(timeRef.current);

    timeRef.current = setTimeout(() => {
      setMarkdown(e.target.value);
    }, 1000);
  };

  return (
    <div className="flex flex-row justify-around h-screen">
      <aside className="m-3 bg-amber-50 focus:outline-amber-200 flex-1 h-1/2 resize-none p-2">
        <NodeCmpt ast={ast} />
      </aside>

      <textarea
        className="m-3 bg-amber-50 focus:outline-amber-200 flex-1 h-1/2 resize-none p-2 font-mono"
        name="result"
        id="result"
        onChange={handleChange}
        onKeyDown={show} // this is here for debugging purposes

      ></textarea>
    </div>
  );
}

export default App;
