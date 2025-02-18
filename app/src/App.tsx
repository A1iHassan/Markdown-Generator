import { ChangeEvent, useState } from "react";

function App() {
  const [markdown, setMarkdown] = useState("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };
  return (
    <div className="flex flex-row justify-around h-screen">
      <p className="m-3 bg-amber-50 focus:outline-amber-200 flex-1 h-1/2 resize-none p-2">
        {markdown}
      </p>
      <textarea
        className="m-3 bg-amber-50 focus:outline-amber-200 flex-1 h-1/2 resize-none p-2 font-mono"
        name="result"
        id="result"
        onChange={handleChange}
      ></textarea>
    </div>
  );
}

export default App;
