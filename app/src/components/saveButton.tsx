import { useState, useRef, useEffect } from "react";

const Save = () => {
  const [showModal, setShowModal] = useState(false);
  const [fileName, setFileName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showModal && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showModal]);

  // Close on click outside the modal card
  useEffect(() => {
    if (!showModal) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setShowModal(false);
        setFileName("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showModal]);

  const downloadFile = (name: string) => {
    const textAreaElement = document.getElementById(
      "result"
    ) as HTMLTextAreaElement;
    const content = textAreaElement.value;
    if (!content) return;

    const sanitized = name.trim() || "untitled";
    const finalName = sanitized.endsWith(".md") ? sanitized : `${sanitized}.md`;

    const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = finalName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setShowModal(false);
    setFileName("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      downloadFile(fileName);
    } else if (e.key === "Escape") {
      setShowModal(false);
      setFileName("");
    }
  };

  return (
    <>
      <button
        className="flex flex-row items-center justify-center gap-2 cursor-pointer
                   text-slate-500 hover:text-slate-700 bg-slate-100 hover:bg-slate-200
                   rounded-lg px-4 py-2 transition-all duration-200 w-full mt-2"
        onClick={() => setShowModal(true)}
      >
        Save .md
        <svg viewBox="0 0 24 24" className="w-4 h-4">
          <path
            d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z"
            fill="currentColor"
          />
        </svg>
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div
            ref={modalRef}
            className="bg-white rounded-xl shadow-2xl p-6 w-80 flex flex-col gap-4
                       animate-[fadeScale_0.2s_ease-out]"
          >
            <span className="text-lg font-semibold text-slate-700">
              Save as Markdown
            </span>
            <input
              ref={inputRef}
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="name without .md"
              className="border border-slate-300 rounded-lg px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-slate-400
                         transition-all duration-150"
            />
            <div className="flex flex-row gap-2 justify-end">
              <button
                onClick={() => {
                  setShowModal(false);
                  setFileName("");
                }}
                className="px-4 py-1.5 rounded-lg text-sm text-slate-500
                           hover:bg-slate-100 cursor-pointer transition-colors duration-150"
              >
                Cancel
              </button>
              <button
                onClick={() => downloadFile(fileName)}
                className="px-4 py-1.5 rounded-lg text-sm text-white bg-slate-600
                           hover:bg-slate-700 cursor-pointer transition-colors duration-150"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Save;
