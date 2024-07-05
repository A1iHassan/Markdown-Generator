export function Link() {
  return (
    <div className="icon">
      <svg
        width={innerWidth < 800 ? "1rem" : "1rem"}
        height={innerWidth < 800 ? "1rem" : "1rem"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626"
          stroke="#1C274C"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
          stroke="#1C274C"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function Hr() {
  return (
    <div className="icon">
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={innerWidth < 800 ? "1rem" : "1rem"}
        height={innerWidth < 800 ? "1rem" : "1rem"}
        viewBox="0 0 290.658 290.658"
        xmlSpace="preserve"
      >
        <g>
          <g>
            <rect y="139.474" width="290.658" height="11.711" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export function InlineCode() {
  return (
    <div className="icon">
      <svg
        width={innerWidth < 800 ? "1rem" : "1rem"}
        height={innerWidth < 800 ? "1rem" : "1rem"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function CodeBlock() {
  return (
    <div className="icon code-block">
      <svg
        width={innerWidth < 800 ? "1rem" : "2rem"}
        height={innerWidth < 800 ? "1rem" : "2rem"}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 15L8.5 12.5L11 10M14 10L16.5 12.5L14 15M5.5 6.5H19.5V18.5H5.5V6.5Z"
          stroke="#121923"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}

export function Ul() {
  return (
    <div className="icon">
      <svg
        fill="#000000"
        width={innerWidth < 800 ? "1rem" : "1rem"}
        height={innerWidth < 800 ? "1rem" : "1rem"}
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0z" />
      </svg>
    </div>
  );
}

export function Ol() {
  return (
    <div className="icon">
      <svg
        fill="#000000"
        width={innerWidth < 800 ? "1rem" : "1rem"}
        height={innerWidth < 800 ? "1rem" : "1rem"}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3.59 3.03h12.2v1.26H3.59zm0 4.29h12.2v1.26H3.59zm0 4.35h12.2v1.26H3.59zM.99 4.79h.49V2.52H.6v.45h.39v1.82zm.87 3.88H.91l.14-.11.3-.24c.35-.28.49-.5.49-.79A.74.74 0 0 0 1 6.8a.77.77 0 0 0-.81.84h.52A.34.34 0 0 1 1 7.25a.31.31 0 0 1 .31.31.6.6 0 0 1-.22.44l-.87.75v.39h1.64zm-.36 3.56a.52.52 0 0 0 .28-.48.67.67 0 0 0-.78-.62.71.71 0 0 0-.77.75h.5a.3.3 0 0 1 .27-.32.26.26 0 1 1 0 .51H.91v.38H1c.23 0 .37.11.37.29a.29.29 0 0 1-.33.29.35.35 0 0 1-.36-.35H.21a.76.76 0 0 0 .83.8.74.74 0 0 0 .83-.72.53.53 0 0 0-.37-.53z" />
      </svg>
    </div>
  );
}

export function BlockQuote() {
  return (
    <div className="icon">
      <svg
        fill="#000000"
        width={innerWidth < 800 ? "1rem" : "1rem"}
        height={innerWidth < 800 ? "1rem" : "1rem"}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.78,8.89c0-3.07,1.53-4.3,4.3-4.34L5.38,6C3.78,6.17,3,7,3.1,8.31H4.54V12H.78Zm5.9,0c0-3.07,1.53-4.3,4.3-4.34L11.28,6C9.68,6.17,8.89,7,9,8.31h1.44V12H6.68Z" />
        <path d="M16.94,15.11c0,3.07-1.53,4.3-4.3,4.34L12.35,18c1.6-.16,2.39-1,2.28-2.3H13.18V12h3.76Zm5.9,0c0,3.07-1.53,4.3-4.3,4.34L18.24,18c1.6-.16,2.39-1,2.28-2.3H19.08V12h3.76Z" />
      </svg>
    </div>
  );
}

export function Italic() {
  return (
    <div className="icon">
      <svg
        width={innerWidth < 800 ? "1rem" : "1rem"}
        height={innerWidth < 800 ? "1rem" : "1rem"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 3H20M4 21H14M15 3L9 21"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function Bold() {
  return (
    <div className="icon">
      <svg
        width={innerWidth < 800 ? "1rem" : "1rem"}
        height={innerWidth < 800 ? "1rem" : "1rem"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 12H12.5C14.9853 12 17 9.98528 17 7.5C17 5.01472 14.9853 3 12.5 3H6V12ZM6 12H13.5C15.9853 12 18 14.0147 18 16.5C18 18.9853 15.9853 21 13.5 21H6V12Z"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function Paragraph() {
  return (
    <div className="icon">
      <svg
        version="1.0"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={innerWidth < 800 ? "1rem" : "1rem"}
        height={innerWidth < 800 ? "1rem" : "1rem"}
        viewBox="0 0 64 64"
        enableBackground="new 0 0 64 64"
        xmlSpace="preserve"
      >
        <line
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeMiterlimit="10"
          x1="0"
          y1="7"
          x2="64"
          y2="7"
        />
        <line
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeMiterlimit="10"
          x1="0"
          y1="17"
          x2="46"
          y2="17"
        />
        <line
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeMiterlimit="10"
          x1="0"
          y1="27"
          x2="64"
          y2="27"
        />
        <line
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeMiterlimit="10"
          x1="0"
          y1="37"
          x2="50"
          y2="37"
        />
        <line
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeMiterlimit="10"
          x1="0"
          y1="47"
          x2="64"
          y2="47"
        />
        <line
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeMiterlimit="10"
          x1="0"
          y1="57"
          x2="54"
          y2="57"
        />
      </svg>
    </div>
  );
}

export function Heading() {
  return (
    <div className="icon">
      <svg
        width={innerWidth < 800 ? "1rem" : "1rem"}
        height={innerWidth < 800 ? "1rem" : "1rem"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 3V21M18 12H7M18 3V21M4 21H8M4 3H8M16 21H20M16 3H20"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
