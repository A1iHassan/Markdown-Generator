/// <reference types="vite/client" />

export interface AstNode {
  type: string;
  value?: string;
  depth?: number;
  children?: AstNode[];
}

