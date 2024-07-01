import { ASTProvidor } from "../util/contextProvidor";
import InputPage from "../components/inputPage";
import MarkdownPage from "../components/markdownPage";

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
