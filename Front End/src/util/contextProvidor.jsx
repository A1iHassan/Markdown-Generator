import { createContext, useState } from "react";

export const AST = createContext();

export function ASTProvidor({ children }) {
  const [ast, setAst] = useState({ type: "root", children: [] });

  return <AST.Provider value={{ ast, setAst }}>{children}</AST.Provider>;
}
