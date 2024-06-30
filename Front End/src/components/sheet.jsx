import { ASTProvidor } from "../util/contextProvidor";
import InputPage from "./inputPage";
import MarkdownPage from "./markdownPage";

export default function Sheet() {
  return (
    <>
      <ASTProvidor>
        <InputPage />
        <MarkdownPage />
      </ASTProvidor>
    </>
  );
}
