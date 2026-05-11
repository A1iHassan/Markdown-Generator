import { ChangeEvent, KeyboardEvent, useState, useRef } from "react";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import NodeCmpt from "../components/nodeCompenent";
import { Root } from "mdast";
import Copy from "../components/copyButton";
import Save from "../components/saveButton";

function Convert() {
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
      <div className="flex-1">
        <aside className="bg-slate-50 h-11/12 resize-none p-2">
          <span className="text-3xl text-slate-400">Output</span>
          <div id="output-content" className="p-2 font-serif">
            {markdown === "" ? (
              <span className="font-sans text-lg text-slate-400">
                Start typing in Markdown to see the results on the Output page
              </span>
            ) : (
              <NodeCmpt ast={ast} />
            )}
          </div>
        </aside>
        <button
          className="flex flex-row items-center justify-center gap-2 cursor-pointer
                     text-slate-500 hover:text-slate-700 bg-slate-100 hover:bg-slate-200
                     rounded-lg px-4 py-2 transition-all duration-200 w-full mt-2
                     print:hidden"
          onClick={() => window.print()}
        >
          Save as PDF
          <svg viewBox="0 0 24 24" className="w-4 h-4">
            <path
              d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <aside className="flex flex-col bg-slate-50  h-11/12 p-2 font-mono">
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
        <Save />
      </div>
    </main>
  );
}

export default Convert;
