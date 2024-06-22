export default function NavBar({ dispatch }) {
  return (
    <>
      <button
        onClick={() => {
          dispatch(`add Heading`);
        }}
      >
        add Headings
      </button>
      <button
        onClick={() => {
          dispatch(`add Paragraph`);
        }}
      >
        add Paragraph
      </button>
      <button
        onClick={() => {
          dispatch(`add Bold`);
        }}
      >
        add Bold
      </button>
      <button
        onClick={() => {
          dispatch(`add Italic`);
        }}
      >
        add Italic
      </button>
      <button
        onClick={() => {
          dispatch(`add Bold-and-Italic`);
        }}
      >
        add Bold and Italic
      </button>
      <button
        onClick={() => {
          dispatch(`add Blockquotes`);
        }}
      >
        add Blockquotes
      </button>
      <button
        onClick={() => {
          dispatch(`add Ordered-List`);
        }}
      >
        add Ordered List
      </button>
      <button
        onClick={() => {
          dispatch(`add Unordered-List`);
        }}
      >
        add Unordered List
      </button>
      <button
        onClick={() => {
          dispatch(`add Code-Block`);
        }}
      >
        add Code Block
      </button>
      <button
        onClick={() => {
          dispatch(`add Inline-Code`);
        }}
      >
        add Inline Code
      </button>
      <button
        onClick={() => {
          dispatch(`add Horizontal-Rule`);
        }}
      >
        add Horizontal Rule
      </button>
      <button
        onClick={() => {
          dispatch(`add Link`);
        }}
      >
        add Link
      </button>
      <button
        onClick={() => {
          dispatch(`add Image`);
        }}
      >
        add Image
      </button>
      <button
        onClick={() => {
          dispatch(`add Line-Break`);
        }}
      >
        add Line Break
      </button>
    </>
  );
}
