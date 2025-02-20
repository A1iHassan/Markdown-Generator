import { ChangeEvent, KeyboardEvent, useState, useRef } from "react";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import NodeCmpt from "./components/nodeCompenent";
import { Root } from "mdast";
import Copy from "./components/copyButton";

function App() {
  const [markdown, setMarkdown] = useState("");
  const timeRef = useRef<number | null>(null);

  const ast: Root = remark().use(remarkParse).use(remarkGfm).parse(markdown);
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
    <main className="flex flex-row justify-around h-screen gap-5 p-5">
      <aside className="bg-slate-50 flex-1 h-11/12 resize-none p-2">
        <span className="text-3xl text-slate-400">Output</span>
        <div className="p-2 font-serif">
          {markdown === "" ? (
            <span className="font-sans text-lg text-slate-400">
              Start typing in Markdown to see the results on the Output page
            </span>
          ) : (
            <NodeCmpt ast={ast} />
          )}
        </div>
      </aside>

      <aside className="flex flex-col bg-slate-50 flex-1 h-11/12 p-2 font-mono">
        <div className="flex flex-row justify-between text-slate-500">
          <span className="text-3xl text-slate-400">Markdown</span>
          <Copy />
        </div>
        <textarea
          className="focus:outline-slate-300 resize-none h-full p-2"
          name="result"
          id="result"
          onChange={handleChange}
          onKeyDown={show} // this is here for debugging purposes
          placeholder="Start typing in Markdown to see the results on the Output page"
        ></textarea>
      </aside>
    </main>
  );
}

export default App;
