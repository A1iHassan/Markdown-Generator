import { useState } from "react";

const Copy = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    if (!click) {
      const textAreaElement = document.getElementById(
        "result"
      ) as HTMLTextAreaElement;
      navigator.clipboard
        .writeText(textAreaElement.value)
        .then(() => {
          setClick(true);
          setTimeout(() => {
            setClick(false);
          }, 1500);
        })
        .catch((err) => console.log("Couldn't copy", err));
    }
  };
  return (
    <button
      className="flex flex-row align-center gap-1 cursor-pointer h-4"
      onClick={handleClick}
    >
      {click ? (
        "Copied!"
      ) : (
        <>
          Copy
          <svg viewBox="0 0 24 24" className="w-4 h-4 mt-1">
            <path
              d="M17 3h-6C8.8 3 7 4.8 7 7c-2.2 0-4 1.8-4 4v6c0 2.2 1.8 4 4 4h6c2.2 0 4-1.8 4-4 2.2 0 4-1.8 4-4V7c0-2.2-1.8-4-4-4zm-2 14c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v6zm4-4c0 1.1-.9 2-2 2v-4c0-2.2-1.8-4-4-4H9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v6z"
              fill="#62748e"
            ></path>
          </svg>
        </>
      )}
    </button>
  );
};

export default Copy;
