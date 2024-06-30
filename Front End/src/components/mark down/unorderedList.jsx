import { useContext, useState } from "react";
import { AST } from "../../util/contextProvidor";

export default function UnorderedListElement({ initialItems = [] }) {
  const [items, setItems] = useState(initialItems);
  const [item, setItem] = useState("");
  const { ast, setAst } = useContext(AST);

  const addItem = () => {
    setItems([...items, item]);
    setItem("");
  };

  return (
    <>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter list item"
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
