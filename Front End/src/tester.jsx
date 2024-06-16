import { useState } from "react";
import "./tester.scss";

function TestComponent() {
  const [text, setText] = useState("");
  const handelChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div>Hello</div>
      <form action="">
        <label htmlFor="test">test field</label>
        <input
          type="text"
          placeholder="enter a text"
          value={text}
          onChange={handelChange}
        />
      </form>
      <p>{text}</p>
    </>
  );
}

export default TestComponent;
